export default function encode(msg, key){
    return msg.split('')
    .map(elem => {
        if(elem.charCodeAt() >= 65 && elem.charCodeAt() <= 90){
            let code = elem.charCodeAt() + parseInt(key % 26);
            if(code > 90) return String.fromCharCode(code - 26);
            else return String.fromCharCode(code);
        }
        else if(elem.charCodeAt() >= 97 && elem.charCodeAt() <= 122){
            let code = elem.charCodeAt() + (key % 26);
            if(code > 122) return String.fromCharCode(code - 26);
            else return String.fromCharCode(code);
        }
        else return elem;
    })
    .join('');
}