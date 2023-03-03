//Створити окремі функції, які переводять:
// 1) Сантиметри у дюйми;
// 2) Кілограми у фунти;
// 3) Кілометри у милі.

const getCmToInch = (userInput = parseInt(prompt('Enter a length in CM to convert it to Inch: ','10'))) => {
  const LENGTH_DIVIDER = 2.54;
  return document.write(`${userInput} CM = ${(userInput/LENGTH_DIVIDER).toFixed(6)} Inch<hr>`);
}

const getKgToLb = (userInput = parseInt(prompt('Enter a weigh in KG to convert it to lb.: ','10'))) => {
  const WEIGH_MULTIPLIER = 2.205;
  return document.write(`${userInput} KG = ${(userInput*WEIGH_MULTIPLIER).toFixed(6)} lb.<hr>`)
}

const getKmToMiles = (userInput = parseInt(prompt('Enter a distance in KM to convert it to miles: ','10'))) => {
  const DISTANCE_DIVIDER = 1.609;
  return document.write(`${userInput} KM = ${(userInput/DISTANCE_DIVIDER).toFixed(6)} miles<hr>`)
}


getCmToInch()
getKgToLb()
getKmToMiles()