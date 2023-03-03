//Створити окремі функції, які для 4 чисел знаходять:
//1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

//Для більшості завдань зроблена можливість вводити довільну кількість чисел

const getCountOfNumbers = (mathOperation='unknown') => {
   let countOfNumbers;
   do {
       countOfNumbers = parseInt(prompt(`Enter a count of numbers for ${mathOperation}: `,'3'))
   } while (isNaN(countOfNumbers) || countOfNumbers <= 0);
    let userNumsArray = [];
    for (let numberCount = 0; numberCount < countOfNumbers; numberCount++) {
        let userNumber;
        do {
            userNumber = parseFloat(prompt('Enter a number: ', '10'));
        }while (isNaN(userNumber))
        userNumsArray.push(userNumber);
    }
    return userNumsArray;
}


const getSumNumber = (...userNumbers) => {
    let numberSum = 0;
    for (let number of userNumbers){
        numberSum += number;
    }
    return numberSum;
}

const getProductNumber = (...userNumbers) => {
    let numberProduct = 1;
    for (let number of userNumbers){
        numberProduct *= number;
    }
    return numberProduct;
}

const getAverageNumber = (...userNumbers) => {
let numberAverage = 0;
for (let number of userNumbers){
    numberAverage += number;
}
return numberAverage / userNumbers.length;
}

const getMinNumber = (...userNumbers) => {
    return Math.min.apply(null, userNumbers)
}

//As a secondary variant

// const getMinNumber = (max = Infinity, ...userNumbers) => {
// let maxValue = max;
// for (let num of userNumbers){
//         if (num < maxValue){
//             maxValue = num;
//         }
//     }
// return maxValue
// }


document.write(`Sum of your numbers is: ${getSumNumber(...getCountOfNumbers('sum')).toFixed(2)}<hr>`)
document.write(`Product of your numbers is: ${getProductNumber(...getCountOfNumbers('product')).toFixed(2)}<hr>`)
document.write(`Arithmetic average of your numbers is: ${getAverageNumber(...getCountOfNumbers('average number')).toFixed(2)}<hr>`)
document.write(`Min number of your number list is: ${getMinNumber(...getCountOfNumbers('get min number')).toFixed(2)}<hr>`)

