//Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

//Для більшості завдань зроблена можливість вводити довільну кількість чисел
const getCountOfNumbers = () => {
    let countOfNumbers;
    do {
        countOfNumbers = parseInt(prompt('Enter a count of numbers: ', '3'));
    } while (isNaN(countOfNumbers) || countOfNumbers <= 0);

    let userNumsArray = [];
    for (let numberCount = 0; numberCount < countOfNumbers; numberCount++) {
        let userNumber;
        do {
            userNumber = parseFloat(prompt('Enter a number: ', '10'));
        } while (isNaN(userNumber));
        userNumsArray.push(userNumber);
    }
    return userNumsArray;
};



const getNumsOperations = (numsArray) => {
    let counter = {
        notListedNumber:[0,"not listed numbers"],
        evenNumber:[0,"even numbers"],
        positiveNumber:[0,"positive numbers"],
        numberOverAHundred:[0,"numbers over a hundred"]
    }

    for (let number of numsArray){
        let key;
        if (number % 2 === 0) {
            key = "evenNumber";
        } else if (0 < number && number < 101) {
            key = "positiveNumber";
        } else if (number > 100) {
            key = "numberOverAHundred";
        } else {
            key = "notListedNumber";
        }
     counter[key][0]++;
    }
    return counter;
}
const outputNumsOperation = (counter) => {
    for (let key of Object.keys(counter)){
        document.write(`Count of ${counter[key][1]} is: ${counter[key][0]}<hr>`)
    }
}

const NUMS_ARRAY = getCountOfNumbers();
const COUNTER = getNumsOperations(NUMS_ARRAY);
outputNumsOperation(COUNTER)
