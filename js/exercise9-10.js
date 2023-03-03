//Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
//Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

//Я вирішив об'єднати 9 та 10 задачі в одну

const getCountOfTemperatures = () => {
  let countOfTemperatures;
  do {
    countOfTemperatures = parseInt(prompt('Enter a count of temperatures: ', '3'));
  } while (isNaN(countOfTemperatures) || countOfTemperatures <= 0);
  
  let userTemperaturesArray = [];
  for (let temperaturesCount = 0; temperaturesCount < countOfTemperatures; temperaturesCount++){
      let userTemperature;
      do {
          userTemperature = parseFloat(prompt(`Enter ${temperaturesCount+1} a temperature: `));
      } while (isNaN(userTemperature));
      userTemperaturesArray.push(userTemperature);
  }
  return userTemperaturesArray;
}

//Exercise 9: Sum of negative temperatures
const getSumNegativeTemperatures = (...userTemperatures) => {
    let temperatureSum = 0;
for (let temperature of userTemperatures){
    if (temperature < 0){
        temperatureSum += temperature;
    }
}
return temperatureSum;
}

//Exercise 10: Average of positive temperatures
const getAveragePositiveTemperatures = (...userTemperatures) => {
  let temperaturesAverage = 0, countOfTemperatures = 0;
  console.log(userTemperatures)
  for (let temperature of userTemperatures){
      if (temperature > 0){
          temperaturesAverage += temperature;
          countOfTemperatures++
      }
  }
  return temperaturesAverage/countOfTemperatures;
}



const USER_TEMPERATURES = getCountOfTemperatures()
const NEGATIVE_TEMPERATURES_SUM = getSumNegativeTemperatures(...USER_TEMPERATURES)
const POSITIVE_TEMPERATURES_AVERAGE = getAveragePositiveTemperatures(...USER_TEMPERATURES)
document.write(`<p>Sum of negative temperatures: ${NEGATIVE_TEMPERATURES_SUM.toFixed(2)}</p><hr><p>Avarage of positive temperatures is: ${POSITIVE_TEMPERATURES_AVERAGE.toFixed(2)}</p>`)


