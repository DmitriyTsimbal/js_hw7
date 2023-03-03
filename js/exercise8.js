//Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при
// кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

const USER_INPUTS = {
    getImage () { let imageUrl;
        do {
            imageUrl = prompt('Please enter the URL of the image: ');
        } while (!/^(ftp|http|https):\/\/[^ "]+$/.test(imageUrl));
    return imageUrl; },
    getUrl () {let linkUrl;
        do {
            linkUrl = prompt('Please enter the URL for link: ');
        } while (!/^(ftp|http|https):\/\/[^ "]+$/.test(linkUrl));
    return linkUrl;},
    getTitle(){
            return  prompt('Please enter a header text: ');
    }
}

const getUserBanner = () => {
  const USER_IMAGE = USER_INPUTS['getImage']
  const USER_URL = USER_INPUTS['getUrl']
  const USER_TITLE =  USER_INPUTS['getTitle']
    return document.write(`<h1>${USER_TITLE()}</h1><hr><a href="${USER_URL()}"><img src="${USER_IMAGE()}" alt="image" "></a>`)
}

getUserBanner()
