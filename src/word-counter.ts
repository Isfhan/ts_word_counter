// Import third party packages
import inquirer from "inquirer";
import chalk from "chalk";


// Import custom modules
import { askUserToEnterParagraph } from "./questions.js";



export class WordCounter {


    public async start() {

        // Get user input
        const userInput = await this.getUserInput();

        // Invoke count words method
        const wordCount = this.countWords(userInput);

        // Show word count
        this.displayWordCount(wordCount);

    }


    private async getUserInput(): Promise<string> {

        // Prompt Questions and get user input
        const { paragraph }: { paragraph: string } = await inquirer.prompt(askUserToEnterParagraph);

        return paragraph;

    }


    private countWords(text: string): number {

        const words = text.split(/\s+/).filter(word => word !== '');

        return words.length;

    }


    private displayWordCount(wordCount: number) {

        // Create message
        const message = `Word count is equal to: ${wordCount}`;

        // Show welcome message to user
        console.log('');
        console.log(chalk.blue.bold(message));
        console.log('');

    }

}