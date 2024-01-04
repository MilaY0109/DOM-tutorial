//document.querySelector
//const categoriesList = document.getElementById('categories');
//const categoriesList = document.querySelector('categories');
//console.log(categoriesList);
// Получаем все элементы li.item внутри списка ul#categories
//const items = categoriesList.querySelectorAll('li.item');
// const items = document.querySelectorAll('#categories .item');
//   //console.log(items);
//      // Выводим количество категорий (элементов li.item)
// console.log(`Number of categories: ${items.length}`);

// // Перебираем каждый элемент li.item для вывода информации о категории
// items.forEach(item => {
//   // Получаем заголовок категории (тег <h2>)
//   const categoryTitle = item.querySelector('h2').textContent;

//   // Получаем количество элементов в текущей категории (всех <li>, вложенных в него)
//   const categoryItems = item.querySelectorAll('li');

//        // Выводим информацию о категории в консоль
//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${categoryItems.length}`);
// });

///const ite = document.querySelectorAll('#categories .item');
//console.log(ite);
// const categorList = document.querySelectorAll('#categories');
// console.log(categorList);


const items = document.querySelectorAll('#categories .item');
  
console.log(`Number of categories: ${items.length}`);


items.forEach(item => {
  
  const categoryTitle = item.querySelector('h2').textContent;

 
  const categoryItems = item.querySelectorAll('li');

       
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
