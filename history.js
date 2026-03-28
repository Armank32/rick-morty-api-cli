import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HISTORY_FILE = path.join(__dirname, 'search_history.json');

function readHistory() {
  try {
    const data = fs.readFileSync(HISTORY_FILE, 'utf8');
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

function writeHistory(keywords) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(keywords, null, 2));
}

function addKeyword(keyword) {
  const keywords = readHistory();
  if (!keywords.includes(keyword)) {
    keywords.push(keyword);
    writeHistory(keywords);
  }
}

function clearHistory() {
  writeHistory([]);
  console.log('🗑️  Search history cleared.');
}

export { readHistory, writeHistory, addKeyword, clearHistory };