
const array = []
let square_sum = 0

for (let i = 1; i <= 50; i++) {
    array.push(i)  

    
}

for (let i = 0; i < array.length; i++) {
    let result = array[i] * array[i]
    square_sum += result
    console.log(square_sum);
    square_sum = 0
    
}


