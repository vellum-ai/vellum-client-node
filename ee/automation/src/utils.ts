import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

export function getVersion() {
  // Read and parse manifest file from environment variable
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  const manifestFile = "package.json";
  if (!manifestFile) {
    throw new Error('FERN_MANIFEST_FILE environment variable is required');
  }
  
  const manifestPath = path.join(__dirname, '..', '..', '..', manifestFile);
  const manifestContent = fs.readFileSync(manifestPath, 'utf8');

  // Extract version using regex from environment variable
  const versionRegexPattern = "\"version\":\\s*\"([^\"]+)\"";
  if (!versionRegexPattern) {
    throw new Error('FERN_VERSION_REGEX environment variable is required');
  }
  
  const versionRegex = new RegExp(versionRegexPattern);
  const version = manifestContent.match(versionRegex)?.[1];
  
  if (!version) {
    throw new Error(`Could not find version in ${manifestFile} using pattern ${versionRegexPattern}`);
  }
  console.log('Found Version:', version);
  return version;
}
