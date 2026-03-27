import inquirer from 'inquirer';

async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'character',
            message: 'What would you like to do? 🔍 Search for a character',
        },
    ]);

    console.log('You chose:', answers.character);
}

main();
