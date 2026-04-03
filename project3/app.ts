import { startup } from "./startup";
import PromptSync from "prompt-sync";
import { status, validStatuses } from "./config";
import { playerHeal, playerAttack} from "./player";
import { enemyHeal, enemyAttack} from "./enemy";

function app() {
    startup()
    const prompt = PromptSync({ sigint: true })

    let playerHealth: number = 100
    let playerDamage: number = 10

    let enemyHealth: number = 100
    let enemyDamage: number = 8

    let healAmount = 8

    while (true) {
        if (enemyHealth <= 0) {
            console.log('\n--- CONGRATULATIONS! YOU HAVE DEFEATED THE ENEMY. ---')
            break
        }

        console.log('\n--- YOUR TURN ---')

        let rawInput: string = prompt('Enter a command from above: ').toLowerCase().trim()
        if (validStatuses.includes(rawInput as status)) {

            switch (rawInput as status) {
                case 'attack':
                    enemyHealth = playerAttack(enemyHealth, playerDamage)
                    console.log(`"You deal ${playerDamage} to the enemy"`)
                    console.log(`\nEnemy health: ${enemyHealth}`)
                    break

                case 'heal':
                    playerHealth = playerHeal(healAmount, playerHealth)
                    console.log(`\nYou increased your health for ${healAmount} points`)
                    console.log(`Player health: ${playerHealth}`)
                    break
            }

            let randomNumber: number = Math.floor(Math.random() * 2) + 1;
            console.log('\n--- ENEMY TURN ---')

            switch (randomNumber) {
                case 1:
                    playerHealth = enemyAttack(playerHealth, enemyDamage)
                    console.log(`Enemy attacked you by ${enemyDamage} pts`)
                    console.log(`Player health: ${playerHealth}`)
                    break

                case 2:
                    enemyHealth = enemyHeal(healAmount, enemyHealth)
                    console.log(`"Enemy health itself by ${enemyHealth} pts"`)
                    console.log(`Enemy health: ${enemyHealth}`)
                    break
            }

        } else {
            console.error("That's not a valid move!")
        }
    }
}

app()