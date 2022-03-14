export function bubbleSort(inputArr){
    const arrCopy = [...inputArr];
    const animations=[];
    let len = arrCopy.length;
    let swapped= false;;

    swapped = false;
    for (let i = 0; i < len; i++) {
        swapped = false;
        for (let j = 0; j < len; j++) {
            animations.push({type:'select',data:[i,j]})
            if (arrCopy[j] > arrCopy[j + 1]) {
                let tmp = arrCopy[j];
                arrCopy[j] = arrCopy[j + 1];
                arrCopy[j + 1] = tmp;
                swapped = true;
            }
            animations.push({type:'swap',data:[i,j],arr:[...arrCopy]})
        }
        if(!swapped){
            break;
          }
    }
    return animations;
};