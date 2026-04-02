export function time(timer: number): Promise<void> {
    return new Promise((resolve) => {
        const timerId = setInterval(() => {
            if (timer > 0) {
                if (timer % 10 === 0) {
                    console.log(`\n${timer}s remaining`)
                }

                if (timer <= 3) {
                    console.log(`Time: ${timer}s`)
                }
                timer--
            } else {
                clearInterval(timerId)
                console.log('Timer finished!\n')

                resolve()
            }
        }, 1000)
    })
}