import { startup } from "./startup"
import { addContact } from "./addContact";
import { displayContacts } from "./displayContacts";

import promptSync from 'prompt-sync';
import { contact, contacts } from "./config";

function app() {
    const prompt = promptSync({ sigint: true });

    let isRunning = true

    startup()

    do {
        let rawInput: string | null = prompt("Enter a command: ");

        // This is to verify is the user's input is not empty
        if (rawInput === null || rawInput.trim() === "") {
            console.error("\nNo input provided or cancelled")
            continue
        }

        switch (rawInput) {
            case '1':
                let newContact: contact = addContact()
                
                contacts.push(newContact)
                console.log(`\n${newContact.firstName} is added to the list`)
                break

            case '2':
                displayContacts(contacts)
                break

            case '3':
                console.log('\nGot it, thanks for playing.')
                isRunning = false
                break
            
            default:
                console.error('\nPlease select from command 1-3.')
                continue
            }

    } while (isRunning)

}

app()