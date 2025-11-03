import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

export function getVersion(): string {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const manifestFile = process.env.FERN_MANIFEST_FILE ?? 'package.json';
  const manifestPath = path.join(__dirname, '..', '..', '..', manifestFile);
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Manifest file not found at ${manifestPath} (FERN_MANIFEST_FILE=${manifestFile})`);
  }

  const content = fs.readFileSync(manifestPath, 'utf8');

  const versionRegexPattern = process.env.FERN_VERSION_REGEX;
  const isJson = manifestFile.toLowerCase().endsWith('.json');

  let version: string | undefined;

  if (isJson && !versionRegexPattern) {
    try {
      const parsed = JSON.parse(content);
      version = parsed?.version;
    } catch (e) {
      throw new Error(`Failed to parse JSON from ${manifestFile}: ${(e as Error).message}`);
    }
  } else {
    let pattern = versionRegexPattern;
    if (!pattern) {
      if (
        manifestFile.endsWith('pyproject.toml') ||
        manifestFile.toLowerCase().endsWith('.toml')
      ) {
        pattern = 'version\\s*=\\s*"([^"]+)"';
      } else {
        throw new Error(
          'FERN_VERSION_REGEX environment variable is required when manifest is not JSON'
        );
      }
    }

    const match = content.match(new RegExp(pattern));
    version = match?.[1];
  }

  if (!version || typeof version !== 'string') {
    throw new Error(
      `Could not find version in ${manifestFile} using ` +
        (versionRegexPattern
          ? `pattern ${versionRegexPattern}`
          : isJson
          ? 'JSON parsing of "version" field'
          : 'default TOML pattern')
    );
  }

  const sanitizedVersion = version.replace(/^v\.?/, '');
  console.log('Found Version:', sanitizedVersion);
  return sanitizedVersion;
}
