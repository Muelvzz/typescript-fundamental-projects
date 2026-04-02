import { startup } from "./startup";
import { time } from "./time";

function app() {
    startup()
    time(15)
}

app()