const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];


// const gallerySet = document.querySelector('.gallery');


// images.forEach(imgItem => {

// const setItem = document.createElement('li');
// setItem.classList.add('set-item');

// const image = document.createElement('img');
// image.classList.add('item-image');
//  image.src = imgItem.url;
//  image.alt = imgItem.alt;


// setItem.appendChild(image);

//   gallerySet.appendChild(setItem);
  

//  });

// gallerySet.style.display = 'flex'; // Устанавливаем галерее свойство display: flex
// gallerySet.style.padding = '10px'; 
// // image.style.width = '200px'; // Установка ширины
// // image.style.height = '250px';
// //gallerySet.style.flexDirection = 'column';
 
// const galleryItem = document.querySelectorAll('.set-item');
// galleryItem.forEach(item => {
//   item.style.margin = '5px'; // Добавляем отступы между элементами
//   item.style.width = '200px'; // Установка ширины
// item.style.height = '250px';
  // Другие стили для элементов галереи
//});


//console.log(document.querySelector('.gallery'));

//--------------------------------------//

// const gallerySet = document.querySelector('.gallery');

// images.forEach(imgItem => {
//   const setItem = document.createElement('li');
//   setItem.classList.add('set-item');

//   const image = document.createElement('img');
//   image.classList.add('item-image');

//   image.src = imgItem.url;
//   image.alt = imgItem.alt;
  

//   image.style.width = '200px'; 
//   image.style.height = '120px'; 

//   setItem.appendChild(image);
//   gallerySet.appendChild(setItem);
// });

// gallerySet.style.display = 'flex'; 
// gallerySet.style.listStyleType = 'none';
// gallerySet.style.flexDirection = 'column';

//---------------------------------------//

// const gallerySet = document.querySelector('.gallery');

// images.forEach(imgItem => {
//   const setItem = document.createElement('li');
//   setItem.classList.add('set-item');

//   const image = document.createElement('img');
//   image.classList.add('item-image');

  
//    image.setAttribute('src', imgItem.url);
//   image.setAttribute('alt', imgItem.alt);

//   image.style.width = '200px'; 
//   image.style.height = '120px'; 

//   setItem.append(image);
//   gallerySet.append(setItem);
// });

// gallerySet.style.display = 'flex'; 
// gallerySet.style.listStyleType = 'none';
// gallerySet.style.flexDirection = 'column';

//--------------------------//
// //работа с массивом объектов  , создание <li></li>

// //const friendListElem = document.querySelector('.js-list');

// const friends = ['Vlad', 'Artem', 'Max', 'Roman', 'Lika'];

// function friendTemplate(friend) {
//   return `<li class="friend-item">${friend}</li>`;
// }
// console.log(friendTemplate());
// function renderFriends() {
//   return friends.map(friendTemplate).join('');

//   //friendListElem.insertAdjacentHTML('beforeend', markup);
// }

// console.log(renderFriends());
//---//
// const friendListElem = document.querySelector('.js-list');
// const friends = ['Vlad', 'Artem', 'Max', 'Roman', 'Lika'];

// function friendTemplate(friend) {
//   return `<li class="friend-item">${friend}</li>`;
// }

// function renderFriends() {
//   const markup = friends.map(friendTemplate).join('');
//   friendListElem.insertAdjacentHTML('beforeend', markup);
// }

// renderFriends();

const gallery = document.querySelector('.gallery');
const htmlElements = images.map(imgItem => `
  <li class="set-item">
    <img class="item-image" src="${imgItem.url}" alt="${imgItem.alt}" style="width: 200px; height: 120px;">
  </li>
`).join('');

gallery.innerHTML = `<ul style="display: flex; list-style-type: none; flex-direction: column;">${htmlElements}</ul>`;