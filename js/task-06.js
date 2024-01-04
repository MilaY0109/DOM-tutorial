function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  

    // function createBoxes(amount) {
    //   const boxesContainer = document.getElementById('boxes');
    //   //boxesContainer.innerHTML = '';

    //   let size = 30;
    //   for (let i = 0; i < amount; i++) {
    //     const box = document.createElement('div');
    //     box.classList.add('box');
    //     box.style.width = `${size}px`;
    //     box.style.height = `${size}px`;
    //     box.style.backgroundColor = getRandomHexColor();
    //     boxesContainer.appendChild(box);
    //     size += 10;
    //   }
    // }

    // function destroyBoxes() {
    //   const boxesContainer = document.getElementById('boxes');
    //   boxesContainer.innerHTML = '';
    // }

    // document.querySelector('button[data-create]').addEventListener('click', function() {
    //   const input = document.querySelector('input[type="number"]');
    //   const amount = parseInt(input.value);

    //   if (amount >= 1 && amount <= 100) {
    //     createBoxes(amount);
    //     input.value = '';
    //   }
    // });

    // document.querySelector('button[data-destroy]').addEventListener('click', function() {
    //   destroyBoxes();
    // });

   
//    // Функция для создания квадратов
// function createBoxes(amount) {
//   const boxesContainer = document.getElementById('boxes');
//   //clearBoxes(boxesContainer);

//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = createBox(size);
//     boxesContainer.appendChild(box);
//     size += 10;
//   }
// }

// // Функция для очистки контейнера квадратов
// function clearBoxes(container) {
//   container.innerHTML = '';
// }

// // Функция для создания отдельного квадрата
// function createBox(size) {
//   const box = document.createElement('div');
//   box.classList.add('box');
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
//   box.style.backgroundColor = getRandomHexColor();
//   return box;
// }

// // Событие при нажатии на кнопку Create
// document.querySelector('button[data-create]').addEventListener('click', function() {
//   const input = document.querySelector('input[type="number"]');
//   const amount = parseInt(input.value);

//   if (amount >= 1 && amount <= 100) {
//     createBoxes(amount);
//     input.value = '';
//   }
// });


function createSquares() {
  const input = document.querySelector('input[type="number"]');
  const amount = input.value;
  const boxesContainer = document.getElementById('boxes');
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const square = document.createElement('div');
    //box.classList.add('box');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(square);
    size += 10;
  }

  //input.value = ''; // Очистка поля ввода после создания квадратов
}

document.querySelector('button[data-create]').addEventListener('click', createSquares);

 function clearBoxes(container) {
  container.innerHTML = '';
}
// Событие при нажатии на кнопку Destroy
document.querySelector('button[data-destroy]').addEventListener('click', function() {
  const boxesContainer = document.getElementById('boxes');
  clearBoxes(boxesContainer);
  

});