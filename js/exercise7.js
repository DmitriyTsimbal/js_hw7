//Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

//Для більшості завдань зроблена можливість вводити довільну кількість чисел

const getImagesPath = () => {
    let countOfImagesPath;
    do {
        countOfImagesPath = parseInt(prompt('How many images do you want to upload?: ', '3'));
    } while (isNaN(countOfImagesPath) || countOfImagesPath <= 0);

    let userImagesPathArray = [];
    for (let pathCount = 0; pathCount < countOfImagesPath; pathCount++) {
        let userPath;
        do {
            userPath = prompt('Please enter the URL of the image: ');
        } while (!/^(ftp|http|https):\/\/[^ "]+$/.test(userPath));
        userImagesPathArray.push(userPath);
    }
    return userImagesPathArray;
};

const IMAGES_PATH = getImagesPath()
const getRandomNumber = () => {
    const MAX = IMAGES_PATH.length-1
    return Math.floor(Math.random()*(MAX+1))
}

const getRandomImage = () => {
const RANDOM_IMAGE_INDEX = getRandomNumber();
const IMAGE_ELEMENT = document.createElement('img');
    IMAGE_ELEMENT.style.width = '200px';
    IMAGE_ELEMENT.style.height = '200px';
    IMAGE_ELEMENT.src = IMAGES_PATH[RANDOM_IMAGE_INDEX];
    document.body.appendChild(IMAGE_ELEMENT);
}

getRandomImage()