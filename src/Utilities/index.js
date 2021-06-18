export const swap = (arr, firstIndex, secondIndex) => {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

export const wait = (waitTime = 1000 / 20) => new Promise((resolve) => {
    setTimeout(() => resolve(), waitTime)
})