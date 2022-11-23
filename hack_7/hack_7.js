/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];


for(let i = 0; i < arr.length; i++){

    let currentString = arr[i].split("")
        currentString[0] = currentString[0].toUpperCase()

    let returnedString = currentString.join("")
    
    result.push(returnedString)
}

//export result
module.exports = result;