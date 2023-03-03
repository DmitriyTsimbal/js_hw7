//Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
const getYearSeason = (monthNumber = parseInt(prompt('Enter a month number(1-12): ','1'))) => {
    let season
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            season = 'Winter'
            break;
        case 3:
        case 4:
        case 5:
            season = 'Spring'
            break;
        case 6:
        case 7:
        case 8:
            season = 'Summer'
            break;
        case 9:
        case 10:
        case 11:
            season = 'Autumn'
            break;
        default:
            season = 'Wrong month number'
    }
return season;
}
document.write(getYearSeason());
