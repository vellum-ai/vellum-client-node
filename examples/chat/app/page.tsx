"use client";

import { type ChangeEvent, type FormEvent, useCallback, useRef, useState } from "react";

import styles from "./page.module.css";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [executionId, setExecutionId] = useState<string | undefined>(undefined);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }, []);

    const handleSubmit = useCallback(
        async (e: FormEvent) => {
            e.preventDefault();

            const trimmedInput = input.trim();
            if (!trimmedInput || isLoading) {
                return;
            }

            const userMessage: Message = { role: "user", content: trimmedInput };
            setMessages((prev) => [...prev, userMessage]);
            setInput("");
            setIsLoading(true);

            const assistantMessage: Message = { role: "assistant", content: "" };
            setMessages((prev) => [...prev, assistantMessage]);

            try {
                const response = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        message: trimmedInput,
                        previousExecutionId: executionId,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`);
                }

                const reader = response.body?.getReader();
                if (!reader) {
                    throw new Error("Response body is not readable");
                }

                const decoder = new TextDecoder();
                let buffer = "";

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) {
                        break;
                    }

                    buffer += decoder.decode(value, { stream: true });
                    const lines = buffer.split("\n");
                    buffer = lines.pop() || "";

                    for (const line of lines) {
                        const trimmedLine = line.trim();
                        if (!trimmedLine) {
                            continue;
                        }

                        try {
                            const event = JSON.parse(trimmedLine);

                            if (event.type === "delta") {
                                setMessages((prev) => {
                                    const lastMessage = prev[prev.length - 1];
                                    if (lastMessage?.role === "assistant") {
                                        return [
                                            ...prev.slice(0, -1),
                                            { ...lastMessage, content: lastMessage.content + event.content },
                                        ];
                                    }
                                    return prev;
                                });
                                scrollToBottom();
                            } else if (event.type === "done") {
                                setExecutionId(event.executionId);
                            } else if (event.type === "error") {
                                throw new Error(event.message);
                            }
                        } catch {
                            // Skip non-JSON lines
                        }
                    }
                }

                // Process remaining buffer
                if (buffer.trim()) {
                    try {
                        const event = JSON.parse(buffer.trim());
                        if (event.type === "done") {
                            setExecutionId(event.executionId);
                        }
                    } catch {
                        // Skip non-JSON data
                    }
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An error occurred";
                setMessages((prev) => {
                    const lastMessage = prev[prev.length - 1];
                    if (lastMessage?.role === "assistant") {
                        return [
                            ...prev.slice(0, -1),
                            { ...lastMessage, content: `Error: ${errorMessage}` },
                        ];
                    }
                    return prev;
                });
            }finally {
                setIsLoading(false);
                scrollToBottom();
            }
        },
        [input, isLoading, executionId, scrollToBottom],
    );

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Vellum Chat</h1>
            </header>

            <div className={styles.messagesContainer}>
                {messages.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p>Send a message to start the conversation</p>
                    </div>
                ) : (
                    <div className={styles.messages}>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`${styles.message} ${
                                    message.role === "user" ? styles.userMessage : styles.assistantMessage
                                }`}
                            >
                                <div className={styles.messageContent}>
                                    {message.content ||
                                        (message.role === "assistant" && isLoading ? (
                                            <span className={styles.typing}>Thinking...</span>
                                        ) : null)}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            <form className={styles.inputForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className={styles.input}
                    disabled={isLoading}
                />
                <button type="submit" className={styles.sendButton} disabled={isLoading || !input.trim()}>
                    {isLoading ? "Sending..." : "Send"}
                </button>
            </form>
        </main>
    );
}
