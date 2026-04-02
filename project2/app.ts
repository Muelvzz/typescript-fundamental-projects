import { showLights } from "./lights";
import { startup } from "./startup";

function app() {
    startup()
    showLights()
}

app()