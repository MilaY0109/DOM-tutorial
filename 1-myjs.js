// console.log(document.documentElement.childNodes);
// console.log(document.documentElement.lastChild.previousSibling);
// console.log(document.documentElement.firstChild.nextSibling);
// console.log(document.documentElement.childNodes[2]);
// console.log(document.body);

// const secondNode = document.documentElement.childNodes[1];
// console.log(secondNode);
// console.log(secondNode.nextSibling);

// const body = document.body;
// console.log(body);
// console.log(body.parentNode);
// console.log(body.parentNode === document.documentElement);

// console.log(document.documentElement.children);
// console.log(document.documentElement.childNodes);
// console.log(document.body.children);

// const bodyElem = document.body;
// console.log(bodyElem.children);
// console.log(bodyElem.lastElementChild);
// console.log(bodyElem.lastElementChild.previousElementSibling);
// console.log(bodyElem.firstElementChild.nextElementSibling);
// console.log(bodyElem.lastChild.previousSibling);

// console.log(bodyElem.parentElement);
//-------------------//


// const btn = document.getElementById("btn-appear");
// btn.addEventListener('click', function () {
    
// })

// const btn = document.getElementById("btn-appear").addEventListener('click', function () {
//     alert('OOOOO');
// });
// function handleClick() {
//   console.log('Кнопка была нажата');
// }

//----------------------------------------------//

// const images = [
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
//     description: "Hokkaido Flower",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
//     description: "Container Haulage Freight",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
//     description: "Aerial Beach View",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
//     description: "Flower Blooms",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
//     description: "Alpine Mountains",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
//     description: "Mountain Lake Sailing",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     description: "Alpine Spring Meadows",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     description: "Nature Landscape",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     description: "Lighthouse Coast Sea",
//   },
// ];


// const gallery = document.querySelector('.gallery');
// const lightbox = document.getElementById('lightbox');
// const lightboxImage = document.querySelector('.lightbox__image');
// const lightboxClose = document.querySelector('.lightbox__close');

// function createGalleryItem(image) {
//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery-item');

//   const galleryLink = document.createElement('a');
//   galleryLink.classList.add('gallery-link');
//   galleryLink.href = image.original;

//   const galleryImg = document.createElement('img');
//   galleryImg.classList.add('gallery-image');
//   galleryImg.src = image.preview;
//   galleryImg.dataset.source = image.original;
//   galleryImg.alt = image.description;

//   galleryLink.appendChild(galleryImg);
//   galleryItem.appendChild(galleryLink);

//   return galleryItem;
// }

// images.forEach(image => {
//   const galleryItem = createGalleryItem(image);
//   gallery.appendChild(galleryItem);
// });

// gallery.addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.classList.contains('gallery-image')) {
//     lightboxImage.src = e.target.dataset.source;
//     lightboxImage.alt = e.target.alt;
//     lightbox.style.display = 'flex';
//   }
// });

// function closeLightbox() {
//   lightbox.style.display = 'none';
// }

// lightboxClose.addEventListener('click', closeLightbox);

// document.addEventListener('keydown', e => {
//   if (e.key === 'Escape') {
//     closeLightbox();
//   }
// });

//=======================================================================//

console.log('This message will no appear in the console');

const value = 5;

const data = JSON.parse("Well, this is awkward");
console.log(data);
try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W в JSON at position 0
  console.log(data);
}
console.log(data);