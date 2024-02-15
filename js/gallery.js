const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];


// const gallery = document.querySelector('.gallery');

// function createGalleryItem(image) {
//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery-item');

//   const galleryLink = document.createElement('a');
//   galleryLink.classList.add('gallery-link');
//   galleryLink.href = image.original;

//   const galleryImg = document.createElement('img');
//   galleryImg.classList.add('gallery-image');
//   galleryImg.src = image.preview;
//   galleryImg.setAttribute('data-source', image.original);
//   galleryImg.alt = image.description;

//   galleryLink.appendChild(galleryImg);
//   galleryItem.appendChild(galleryLink);

//   return galleryItem;
// }

// function addGalleryItemsToDOM(images) {
//   const galleryItems = images.map(createGalleryItem);
//   gallery.innerHTML = '';
//   galleryItems.forEach(item => gallery.appendChild(item));
// }

// addGalleryItemsToDOM(images);

// gallery.addEventListener('click', e => {
//   e.preventDefault();
//   const targetImage = e.target.closest('.gallery-link');
//   if (targetImage) {
//     const largeImageSrc = targetImage.querySelector('.gallery-image').dataset.source;
//     // Здесь можно использовать полученный largeImageSrc для дальнейших действий
//     console.log(largeImageSrc); // Выводим ссылку на большое изображение в консоль
//   }
// });

// const gallery = document.querySelector('.gallery');

// function createGalleryItem(gallery-item) {
//     return `<li class="gallery-item">
//   <a class="gallery-link" href="large-image.jpg">
//     <img
//       class="gallery-image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
//     </li>`;
// }
// function galleryListTemplate(gallery) {
//   return gallery.map(createGalleryItem).join('');
// }

// function render() {
//   const markup = galleryListTemplate(gallery);
//   container.innerHTML = markup;
// }

// render();

// const gallery = document.querySelector('.gallery');

// // function createGalleryItem({ original, preview, description }) {
// //     return `<li class="gallery-item">
// //       <a class="gallery-link" href="${original}">
// //         <img
// //           class="gallery-image"
// //           src="${preview}"
// //           data-source="${original}"
// //           alt="${description}"
// //         />
// //       </a>
// //     </li>`;
// // }
  

// const createGalleryList = images.map(({ original, preview, description }) => {
//    return `<li class="gallery-item">
//       <a class="gallery-link" href="${original}">
//         <img
//           class="gallery-image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </li>`;
// })
// .join('');



// // function createGalleryList(items) {
// //     return items.map(createGalleryItem).join('');
// // }
// function displayGallery() {
//     const galleryContent = createGalleryList(images);
//     gallery.innerHTML = galleryContent;
// }

// // Вызов функции для отображения галереи
// displayGallery();
// // function render() {
// //     const markup = galleryListTemplate(images);
// //     gallery.innerHTML = markup;
// // }

// // render();


// gallery.addEventListener('click', e => {
//   e.preventDefault();
//   const targetImage = e.target.closest('.gallery-link');
//   if (targetImage) {
//     const largeImageSrc = targetImage.querySelector('.gallery-image').dataset.source;
// //const largeImageSrc = targetImage.querySelector('.gallery-image').src;
// // gallery.addEventListener('click', e => {
// //   if (e.target === e.currentTarget) return;

//     const instance = basicLightbox.create(`
//       <img src="${largeImageSrc}" alt="Large Image">
//     `);

//     instance.show();

//     document.addEventListener('keydown', modalClose);

//     function modalClose(event) {
//       if (event.key === 'Escape') {
//         instance.close();
//         document.removeEventListener('keydown', modalClose);
//       }
//     }
//   }
// });
    


//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery-item');

//   const galleryLink = document.createElement('a');
//   galleryLink.classList.add('gallery-link');
//   galleryLink.href = image.original;

//   const galleryImg = document.createElement('img');
//   galleryImg.classList.add('gallery-image');
//   galleryImg.src = image.preview;
//   galleryImg.setAttribute('data-source', image.original);
//   galleryImg.alt = image.description;

//   galleryLink.appendChild(galleryImg);
//   galleryItem.appendChild(galleryLink);

//   return galleryItem;
// }

// function addGalleryItemsToDOM(images) {
//   const galleryItems = images.map(createGalleryItem);
//   gallery.innerHTML = '';
//   galleryItems.forEach(item => gallery.appendChild(item));
// }

// addGalleryItemsToDOM(images);

// gallery.addEventListener('click', e => {
//   e.preventDefault();
//   const targetImage = e.target.closest('.gallery-link');
//   if (targetImage) {
//     const largeImageSrc = targetImage.querySelector('.gallery-image').dataset.source;
//     // Здесь можно использовать полученный largeImageSrc для дальнейших действий
//     console.log(largeImageSrc); // Выводим ссылку на большое изображение в консоль
//   }
// });


// const gallery = document.querySelector('.gallery');

// function createGalleryItem(item) {
//     return `<li class="gallery-item">
//       <a class="gallery-link" href="${item.original}">
//         <img
//           class="gallery-image"
//           src="${item.preview}"
//           data-source="${item.original}"
//           alt="${item.description}"
//         />
//       </a>
//     </li>`;
// }

// function createGalleryList(items) {
//     return items.map(createGalleryItem).join('');
// }

// function displayGallery() {
//     const galleryContent = createGalleryList(images);
//     gallery.innerHTML = galleryContent;
// }
// displayGallery();



// gallery.addEventListener('click', e => {
//   e.preventDefault();
//   const targetImage = e.target.closest('.gallery-link');
//   if (targetImage) {
//     const largeImageSrc = targetImage.querySelector('.gallery-image').dataset.source;


//     const instance = basicLightbox.create(`
//       <img src="${largeImageSrc}" alt="Large Image">
//     `);
//     instance.show();


//     document.addEventListener('keydown', modalClose);

//     function modalClose(event) {
//       if (event.key === 'Escape') {
//         instance.close();
//         document.removeEventListener('keydown', modalClose);
//       }
//     }
//   }
// });

//=========================================


// const gallery = document.querySelector('.gallery');

// // function createGalleryItem(item) {
// //     return `<li class="gallery-item">
// //       <a class="gallery-link" href="${item.original}">
// //         <img
// //           class="gallery-image"
// //           src="${item.preview}"
// //           data-source="${item.original}"
// //           alt="${item.description}"
// //         />
// //       </a>
// //     </li>`;
// // }

// // function createGalleryList(items) {
// //     return items.map(createGalleryItem).join('');
// // }

// const createGalleryList = images.map(({ original, preview, description }) =>
//   `<li class="gallery-item">
//     <a class="gallery-link" href="${original}">
//       <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
//     </a>
//   </li>`
// ).join('');



// function displayGallery() {
//     const galleryContent = createGalleryList(images);
//     gallery.innerHTML = galleryContent;
// }
// displayGallery();

// function modalClose(event, instance) {
//     if (event.key === 'Escape') {
//         instance.close();
//         document.removeEventListener('keydown', modalClose);
//     }
// }

// gallery.addEventListener('click', e => {
//     e.preventDefault();
//     const targetImage = e.target.closest('.gallery-link');
//     if (targetImage) {
//         const largeImageSrc = targetImage.querySelector('.gallery-image').dataset.source;

//         const instance = basicLightbox.create(`
//           <img src="${largeImageSrc}" alt="Large Image">
//         `, {
//             onClose: (instance) => {
//                 document.removeEventListener('keydown', (event) => modalClose(event, instance));
//             }
//         });

//         instance.show();

//         document.addEventListener('keydown', (event) => modalClose(event, instance));
//     }
// });


// const gallery = document.querySelector('.gallery');


// const createGalleryList = images.map(({ original, preview, description }) =>
//   `<li class="gallery-item">
//     <a class="gallery-link" href="${original}">
//       <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
//     </a>
//   </li>`
// ).join('');

// function displayGallery() {
//   const galleryContent = createGalleryList;
//   gallery.innerHTML = galleryContent;
// }
// displayGallery();

// function modalClose(event, instance) {
//   if (event.key === 'Escape') {
//     instance.close();
//     document.removeEventListener('keydown', (event) => modalClose(event, instance));
//   }
// }

// gallery.addEventListener('click', e => {
//   e.preventDefault();
//   const clickedLink = e.target.closest('.gallery-link');
//   if (clickedLink) {
//     const largeImageSrc = clickedLink.querySelector('.gallery-image').dataset.source;

//     const instance = basicLightbox.create(`
//       <img src="${largeImageSrc}" alt="Large Image">
//     `, {
//       onClose: (instance) => {
//         document.removeEventListener('keydown', (event) => modalClose(event, instance));
//       }
//     });

//     instance.show();

//     document.addEventListener('keydown', (event) => modalClose(event, instance));
//   }
// });


//=============================
// const gallery = document.querySelector('.gallery');

// const createGalleryList = images.map(({ original, preview, description }) =>
//   `<li class="gallery-item">
//     <a class="gallery-link" href="${original}" data-source="${original}" data-description="${description}">
//       <img class="gallery-image" src="${preview}" alt="${description}" />
//     </a>
//   </li>`
// ).join('');

// function displayGallery() {
//   const galleryContent = createGalleryList;
//   gallery.innerHTML = galleryContent;
// }
// displayGallery();

// function modalClose(event, instance) {
//   if (event.key === 'Escape') {
//     instance.close();
//     document.removeEventListener('keydown', modalClose);
//   }
// }

// gallery.addEventListener('click', e => {
//   e.preventDefault();
//   const clickedImage = e.target.closest('.gallery-image');
//   if (clickedImage) {
//     const largeImageSrc = clickedImage.dataset.source;
//     const description = clickedImage.closest('.gallery-link').dataset.description;

//     const instance = basicLightbox.create(`
//       <img src="${largeImageSrc}" alt="${description}">
//     `, {
//       onShow: (instance) => {
//         document.addEventListener('keydown', (event) => modalClose(event, instance));
//       },
//       onClose: (instance) => {
//         document.removeEventListener('keydown', (event) => modalClose(event, instance));
//       }
//     });
//     instance.show();
//   }
// });


const gallery = document.querySelector('.gallery');

const createGalleryList = images.map(({ original, preview, description }) =>
  `<li class="gallery-item">
    <a class="gallery-link" href="${original}" data-source="${original}" data-description="${description}">
      <img class="gallery-image" src="${preview}" alt="${description}" />
    </a>
  </li>`
).join('');

function displayGallery() {
  const galleryContent = createGalleryList;
  gallery.innerHTML = galleryContent;
}
displayGallery();

function modalClose(event, instance) {
  if (event.key === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', modalClose);
  }
}

gallery.addEventListener('click', e => {
  e.preventDefault();
  const clickedLink = e.target.closest('.gallery-link');
  if (clickedLink) {
    const largeImageSrc = clickedLink.dataset.source;
    const description = clickedLink.dataset.description;

    const instance = basicLightbox.create(`
      <img src="${largeImageSrc}" alt="${description}">
    `, {
      onShow: (instance) => {
        document.addEventListener('keydown', (event) => modalClose(event, instance));
      },
      onClose: (instance) => {
        document.removeEventListener('keydown', (event) => modalClose(event, instance));
      }
    });

    instance.show();
  }
});


