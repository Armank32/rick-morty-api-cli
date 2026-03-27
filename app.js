import inquirer from 'inquirer';
import { searchCharacters, getCharacterById } from './api.js';
import { addKeyword, readHistory } from './history.js';

/**
 * Format a character object into a readable string.
 * @param {Object} character - Character object from API.
 * @returns {string} Formatted character details.
 */
function formatCharacterDetails(character) {
  let details = `\n👤 ${character.name}\n`;
  details += `   Status: ${character.status}\n`;
  details += `   Species: ${character.species}\n`;
  if (character.type) details += `   Type: ${character.type}\n`;
  details += `   Gender: ${character.gender}\n`;
  details += `   Origin: ${character.origin.name}\n`;
  details += `   Last known location: ${character.location.name}\n`;
  if (character.episode.length > 0) {
    details += `   Appears in ${character.episode.length} episode(s)\n`;
  }
  return details;
}

/**
 * Prompt user to select a character from search results.
 * @param {Array} characters - Array of character objects.
 * @returns {Promise<Object>} Selected character object.
 */
async function selectCharacter(characters) {
  const choices = characters.map(char => ({
    name: `${char.name} (${char.species} | ${char.status})`,
    value: char.id
  }));
  const answer = await inquirer.prompt([
    {
      type: 'rawlist',
      name: 'selectedCharacter',
      message: 'Select a character for details:',
      choices
    }
  ]);
  return answer.selectedCharacter;
}

/**
 * Perform a search, save keyword, and allow selection.
 * @param {string} keyword - The search term.
 */
async function searchAndSelect(keyword) {
  console.log(`\n🔍 Searching for "${keyword}"...`);
  const characters = await searchCharacters(keyword);
  if (characters.length === 0) {
    console.log('❌ No characters found.\n');
    return;
  }

  // Save keyword to history (only if not already present)
  addKeyword(keyword);

  // Let user select a character
  const selectedChar = await selectCharacter(characters);
  console.log('\n📖 Fetching detailed information...');
  const detailedChar = await getCharacterById(selectedChar);
  if (detailedChar) {
    console.log(formatCharacterDetails(detailedChar));
  } else {
    console.log('❌ Failed to retrieve details.');
  }
  console.log(); // blank line for readability
}

/**
 * Show history menu and handle selection.
 */
async function historyKeywords() {
  const keywords = readHistory();
  if (keywords.length === 0) {
    console.log('📭 No search history found.\n');
    return;
  }

  const choices = [
    { name: '🚪 Exit', value: 'exit' },
    ...keywords.map(k => ({ name: k, value: k }))
  ];
  const answer = await inquirer.prompt([
    {
      type: 'rawlist',
      name: 'selectedKeyword',
      message: 'Select a previous search keyword:',
      choices
    }
  ]);
  if (answer.selectedKeyword !== 'exit') {
    await searchAndSelect(answer.selectedKeyword);
  }
}

export { searchAndSelect, historyKeywords };
