import PromptSync from "prompt-sync";

export function addContact() {
    const prompt = PromptSync({ sigint: true })

    let firstName : string | null = prompt("Enter first name: ")
    let email : string | null = prompt("Enter email: ")
    let phoneNumber : string | null = prompt("Enter phone number: ")
}

// user enters a first name
// program checks if the user entered nothing
// if yes, program throws a loop. If not, program proceeds

// user enters a email
// program checks if the user entered nothing
// if yes, program throws a loop. If not, program proceeds

// user enters a phone number
// program checks if the user entered nothing
// if yes, program throws a loop. If not, program proceeds

// program adds the three values together as an object
// program returns it