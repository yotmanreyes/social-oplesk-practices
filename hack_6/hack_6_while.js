/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let result = [];
let strToArray = str.split("")

let i = 0;
while( i <= strToArray.length){
    result.push(strToArray[i])
    i++
}

//export result
module.exports = result;