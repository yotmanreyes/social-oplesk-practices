/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

for(let i = 1; i <= numberArray.length; i++){
    
    (i == 1) ? result.push("h@ck") : ''

    if(i % 2 == 1){
        (i == 1) ? result.push('one') : '';
        (i == 3) ? result.push('three') : '';
        (i == 5) ? result.push('five') : '';
    }else{
        result.push(i)
    }
    
    if(i == numberArray.length) 
        result.push("h@ck")
}

for(let j = 0; j < stringArray.length; j++){

    (stringArray[j] == 'foo') ? result.push('f00') : '';
    (stringArray[j] == 'bar') ? result.push('Bar') : '';
    (stringArray[j] == 'baz') ? result.push('b@z') : '';
    (stringArray[j] == 'qux') ? result.push('quX') : '';
    (stringArray[j] == 'echo') ? result.push('3ch0') : '';

    if(j == (stringArray.length - 1)) 
        result.push("h@ck")
}
//export result
module.exports = result;