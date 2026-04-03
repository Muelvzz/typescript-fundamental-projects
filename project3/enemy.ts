export function enemyHeal(healAmount: number, enemyHealth: number) {
    enemyHealth += healAmount

    if (enemyHealth > 85) console.log('Enemy: I will accomplish my goal!')
    if (enemyHealth > 100) console.log('Enemy: You should now surrender!')

    return enemyHealth
}

export function enemyAttack(playerHealth: number, enemyDamage: number) {
    playerHealth -= enemyDamage

    if (playerHealth <= 0) console.log('Enemy: HA-HA-HA! The Hero has fallen.')
    
    return playerHealth
}