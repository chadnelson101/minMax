let array = [10, 5, 7, 5, 9, 8, 11, 6];

function minNumber(){
    return Math.min(...array);
}

function maxNumber(){
    return Math.max(...array);
}

console.log('Minimum Number:', minNumber());
console.log('Maximum Number:',maxNumber() );