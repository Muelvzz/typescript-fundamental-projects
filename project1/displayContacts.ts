import { contact } from "./config"

export function displayContacts(contacts: contact[]) {
    if (contacts.length === 0) {
        console.log('\nNo contacts available')
    } else {
        let x: number = 0

        for (x = 0; x < contacts.length; x++) {
            console.log(`\nProfile #${x + 1}`)
            console.log(`First Name: ${contacts[x].firstName}`)
            console.log(`Email: ${contacts[x].email}`)
            console.log(`Phone Number: ${contacts[x].phoneNumber}`)
        }
    }
}