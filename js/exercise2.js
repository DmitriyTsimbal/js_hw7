//Створити функцію, яка за номером дня дозволяє з'ясувати чи є цей день робочим.

// Variant 1(Using if else)
//
// const isAWorkday = (dayNumber = parseInt(prompt('Enter a day number(0-6): ','0'))) => {
//     let dayType
//     if (dayNumber < 0 || dayNumber > 6) {
//         dayType = 'Wrong number'
//     } else if (dayNumber <= 4){
//         dayType = 'This is a work day'
//     } else dayType = 'This is a day off'
//     return dayType;
// }
// document.write(isAWorkday());


// Variant 2(Using ternary operator)

const isAWorkday = (dayNumber = parseInt(prompt('Enter a day number(0-6): ','0'))) => {
    return (dayNumber < 0 || dayNumber > 6) ? 'Wrong number' :
        (dayNumber <= 4) ? 'This is a work day' : 'This is a day off';
}
document.write(isAWorkday());
