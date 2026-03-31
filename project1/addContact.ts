import PromptSync from "prompt-sync";
import { contact } from "./config";

const prompt = PromptSync({ sigint: true });

function getNonEmptyInput(message: string): string {
    let userInput: string | null = '';

    do {
        userInput = prompt(message);

        if (userInput === null || userInput.trim() === "") {
            console.error("This field cannot be empty. Please try again.");
        }
    } while (userInput === null || userInput.trim() === "");

    return userInput.trim(); 
}

export function addContact(): contact {
    const firstName = getNonEmptyInput("Enter first name: ");
    const email = getNonEmptyInput("Enter email: ");
    const phoneNumber = getNonEmptyInput("Enter phone number: ");

    return {
        firstName: firstName,
        email: email,
        phoneNumber: phoneNumber,
    };
}