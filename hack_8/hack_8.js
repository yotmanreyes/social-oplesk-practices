/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let currentString = "";

for(let i = 0; i < arr.length; i++){
    currentString = arr[i]
   
    if(currentString.indexOf('ba') > -1){
        result.push(currentString.replace('a', '@'))
    }
    
    if(currentString.indexOf('qux') > -1){
        currentString = currentString.toUpperCase()
        result.push(currentString)
    }

}

//export result
module.exports = result;