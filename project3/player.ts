export function playerHeal(healAmount: number, playerHealth: number) {
    playerHealth += healAmount

    if (playerHealth > 85) console.log('Player: I will stop you!')
    if (playerHealth > 100) console.log('Player: The universe is with me.')

    return playerHealth
}

export function playerAttack(enemyHealth: number, playerDamage: number) {
    enemyHealth -= playerDamage

    if (enemyHealth <= 0) console.log('Player: I will save this world from you.')

    return enemyHealth
}