export default function analyzeArray(arr){
        
    const average = avg(arr);
    const max = mx(arr);
    const min = mn(arr);
    const length = arr.length;
        
    return { average, max, min, length };
}

function avg(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

function mx(arr){
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max) max = arr[i];
    }
    return max;
}

function mn(arr){
    let min = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min) min = arr[i];
    }
    return min;
}