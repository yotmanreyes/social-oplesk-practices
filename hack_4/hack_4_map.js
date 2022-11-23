/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let numbers = [];

for (let i = 1; i <= 7; i++){
    numbers.push(i)
}

/*[1, 2, 3, 4, 5, 6, 7]*/
numbers.map( n => {
    if(n % 2 == 1){
        result[n] = n
    }
})

//export result
module.exports = result;