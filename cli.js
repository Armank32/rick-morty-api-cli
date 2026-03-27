import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { searchAndSelect, historyKeywords } from './app.js';

const argv = yargs(hideBin(process.argv))
  .command('search <keyword>', 'Search for a character by keyword')
  .command('history <action>', 'View search history')
  .help()
  .parse();

const command = argv._[0];

if (command === 'search') {
  await searchAndSelect(argv.keyword);
} else if (command === 'history') {
  if (argv.action === 'keywords') {
    await historyKeywords();
  } else {
    console.log('Invalid argument. Use: node cli.js history keywords');
  }
}
