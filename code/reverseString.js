function reverseString(str){
    let arr = str.split('');
    for(let i = 0; i < (arr.length)/2; i++){
        let temp;
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr.join('');
}

export default reverseString;