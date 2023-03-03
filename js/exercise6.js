//Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

const TABLE_ROWS = parseInt(prompt('Please, enter a number of rows: ', '2'))
const TABLE_COLUMNS = parseInt(prompt('Please, enter a number of columns: ', '2'))
const getUserTable = (countOfRows, countOfColumns) => {
  document.write('<table>')
  for (let rowNumber = 0; rowNumber < countOfRows; rowNumber++){
      document.write(`<tr>`)
      for (let columnNumber = 0; columnNumber < countOfColumns; columnNumber++){
          document.write(`<td>Lorem ipsum dolor sit amet.</td>`)
      }
  }
}

getUserTable(TABLE_ROWS,TABLE_COLUMNS)