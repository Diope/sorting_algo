import {wait, swap} from '../Utilities'

export const bubbleSort = async (arr, setArr, setCurrentIndex, setCurrentNext) => {
    const leng = arr.length;
    for (let i = 0; i < leng; i++) {
        for (let j = 0; j < leng; j++) {
            setCurrentIndex(i);
            setCurrentNext(i + 1);
            if (arr[j] > arr[j + 1]) {
                swap(arr, arr[j], arr[j + 1]);
            }
            setArr([...arr])
        }
        await wait();
    }
    setCurrentIndex(null)
    setCurrentNext(null)
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