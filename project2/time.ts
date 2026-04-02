let startTime : number | null = null

export function time(timer: number) {
    const timerId: ReturnType<typeof setInterval> = setInterval(() => {
        if (timer > 0) {
            console.log(`Time: ${timer}s`)
            timer--
        } else {
            clearInterval(timerId)
            console.log('Timer finished!')
        }
    }, 1000)
}