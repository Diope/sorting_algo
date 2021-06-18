const swap = (arr, firstIndex, secondIndex) => {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

export const bubbleSort = (inputArray, setCurrentIndex, setCurrentNext) => {
    const leng = inputArray.length;
    for (let i = 0; i < leng; i++) {
        for (let j = 0; j < leng; j++) {
            setCurrentIndex(i);
            setCurrentNext(i + 1);
            if (inputArray[j] > inputArray[j + 1]) {
                let temp = inputArray[j];
                inputArray[j] = inputArray[j + 1]
                inputArray[j + 1] = temp;
            }
        }
    }
    setCurrentIndex(null)
    setCurrentNext(null)

    return inputArray;
}

export const selectionSort = (inputArray) => {
    const duplicateArr = inputArray.concat();
    const order = [];

    let i, j;


    for (i = 0; i < duplicateArr.length; i++) {
        for (j = i+1; j < duplicateArr.length; j++) {
            order.push([i, j, null, null])
            if (duplicateArr[i] > duplicateArr[j]) {
                swap(duplicateArr, i, j)
                order.push([i, j, duplicateArr.slice(), null])
            }
        }
        order.push([null, null, null, i])
    }
    return order
}