/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

for(let i = 7; i >= 1; i--){
    if(i % 2 == 1){
        result.push(i)
    }
}

//export result
module.exports = result;