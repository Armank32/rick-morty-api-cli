const fs = require('fs');
const path = require('path');

const HISTORY_FILE = path.join(__dirname, 'search_history.json');

function readHistory() {
  try {
    const data = fs.readFileSync(HISTORY_FILE, 'utf8');
    return JSON.parse(data);
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

module.exports = { readHistory, writeHistory, addKeyword };