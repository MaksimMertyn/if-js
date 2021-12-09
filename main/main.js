let user = 'John Doe';
console.log(user)

let student = 'Maksim Mertyn';
console.log(student)

user = student ;

let test  = 1;

test  = test  + 1;

test  = test  + '1';

/21 Kонкатенация /

console.log(test);

test  = test  - 1;

/20/

console.log(test);


let test = NaN;
test;
Boolean(test);
/False, так-как стоит значение NaN/


let test = 20;
test;
Boolean(test);
/True, так-как есть вывод числа(решение)/

/1-я задача/

let result = 1;
let arr = [2, 3, 5, 8];
for (let i = 0; i < arr.length; i++ ){
    result = result * arr[i];
}
console.log(result);

/2-я задача/

let arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr.length; i++ ){

    if(arr[i] >5 && arr[i] < 10) {
        console.log(arr[i])
    }
}

/3-я задача/

let arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr.length; i++) {

    if( arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}







function palindorme(str) {
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[ len - 1 - i]){
            return false;
        }
    }
    return true;
}


function min (a, b) {
    if (a < b){
        return a;
    }
    else {
        return b;
    }
}

function min(a, b) {
    return a < b ? a : b;
}

function max(a,y) {
    if (a > y){
        return a;
    }
    else {
        return b;
    }
}

function max(a, y) {
    return a > y ? a : y;
}

let array = []
for (let i = 0; i < 100; i++) {
    array.push(0 + Math.random() * ((100 - (0)) + 1))
}
function replaceZero(number) {
    const numStr = `${number}`;
    if (numStr.includes('0')) {
        return `${number}`.replaceAll('0', 'zero');
    }
    return number;
}
console.log(replaceZero (50));
