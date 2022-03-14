import {swap} from './swap'

   export function insertionSort(arr=[]){
    const arrCopy = [...arr];
    const animations=[];
    for(let i=0;i<arr.length;i++){
        for(let j =i;j>0;j--){
            animations.push({type:'select',data:[j,j-1]})
            if(arrCopy[j]<arrCopy[j-1]){
                swap(arrCopy,j,j-1);
                animations.push({type:'swap',data:[j,j-1],arr:[...arrCopy]})
            }else{
                break;
            }
        }
    }

    return animations
}