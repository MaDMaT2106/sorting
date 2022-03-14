import {shuffle} from './shuffle'
import { swap } from './swap';

function partition(arr, low, high, animations) {
    let i = low;
    let j = high + 1;
    while (true) {
        while (arr[++i] < arr[low]) {
            if (i === high) {
                break;
            }
        }

        animations.push({ type: "select", data: [i, low] });

        while (arr[--j] > arr[low]) {
            if (i === low) {
                break;
            }
        }

        animations.push({ type: "select", data: [j, low] });

        if (i >= j) {
            break;
        }
        swap(arr, i, j);
        animations.push({ type: "swap", data: [i, j], arr: [...arr] });
    }
    swap(arr, j, low);
    animations.push({ type: "swap",data:[low,j],arr:[...arr]})
    return j;
}

function sort(arr, low, high, animations) {
    if (low >= high) {
        return;
    }
    const j = partition(arr, low, high, animations);
    sort(arr, low, j - 1, animations);
    sort(arr, j + 1, high, animations);
}

export function quickSort(arr) {
    const arrCopy = shuffle(arr);
    const animations = [];

    sort(arrCopy, 0, arrCopy.length - 1, animations);
    return animations;
}

