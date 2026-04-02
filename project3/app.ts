import { startup } from "./startup";
import PromptSync from "prompt-sync";
import { action } from "./action";
import { status, validStatuses } from "./config";

function app() {
    const prompt = PromptSync({ sigint: true })
    startup()

    let rawInput: string = prompt('Enter a command from above: ').toLowerCase().trim()

    if (validStatuses.includes(rawInput as status)) {
        action(rawInput as status)
    } else {
        console.error("That's not a valid move!")
    }
}

app()