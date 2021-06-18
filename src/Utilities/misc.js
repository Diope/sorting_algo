export const wait = (waitTime = 1000 / 20) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), waitTime)
    })
}