/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result  = [];
let numbers = [];

for(let i = 7; i >= 1; i--){
    numbers.push(i)
}

numbers.map(n => {
    if(n % 2 == 1){
        result.push(n)
    }
})

//export result
module.exports = result;