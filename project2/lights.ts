import { time } from "./time";
import { lightList } from "./config";

export async function showLights() {
    let index: number = 0
    let currentLight = lightList[index]

    while (true) {
        if (index === 3) {
            index = 0
            currentLight = lightList[index]
        }

        console.log(`The signal is now ${currentLight.color}`)
        await time(currentLight.duration)
        currentLight = lightList[++index]
    }
}