function capitalize(str){

    return str.split('')
    .map((elem, index) => {
        if(index == 0) elem = elem.toUpperCase();
        return elem;
    })
    .join('');
}

export default capitalize;