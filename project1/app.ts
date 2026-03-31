import { startup } from "./startup"

import promptSync from 'prompt-sync';

function app() {
    const prompt = promptSync({ sigint: true });

    startup()

    let rawInput: string | null = prompt("Enter a command: ");

    // This is to verify is the user's input is not empty
    if (rawInput === null || rawInput.trim() === "") {
        console.error("No input provided or cancelled")
        throw new Error("Input was null or empty")
    }

    let userCommand : number = Number(rawInput) // To enforce strict data type regulation

    if (!isNaN(userCommand)) {
        console.log(userCommand)
    } else {
        console.error(`${rawInput} is not a valid number value`)
        throw new Error("Invalid number entered.")
    }
}

app()