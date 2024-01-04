// const div1id = document.getElementById("div1");
// console.log(div1id);
// console.log(window.div1);
// console.log(div1);

//---------------------//
//const divall = document.querySelectorAll(".divcl");
//const divall = document.querySelectorAll(".divcl")[0];
const divall = document.querySelector(".divcl");
//const divall = document.getElementsByTagName("div");
// const divall = document.getElementsByClassName("divcl");
 console.log(divall);

// setTimeout(() => {
//     divall.forEach((div) => {
//         div.style.fontSize = "30px";
//     });
// }, 3000);

//------------------------//
// const bodyDoc = document.body;
// const firstElem = bodyDoc.firstChild;
const headerDoc = document.querySelector('header');

console.log(headerDoc);
// console.log(bodyDoc);
// console.log(bodyDoc.tagName);
// console.log(bodyDoc.nodeName);
// console.log(firstElem);
// console.log(firstElem.tagName);
// console.log(firstElem.nodeName);

//------------------------//
console.log(headerDoc.innerHTML);
console.log(divall.innerHTML);
 

// setTimeout(() => {
//     headerDoc.innerHTML = '';
// }, 4000);

// setTimeout(() => {
//     headerDoc.innerHTML += '<p class="paragraph">Paragr 2 new</p>';
// }, 4000);
// console.log(headerDoc.innerHTML);

//------------------------//
// console.log(headerDoc.outerHTML);

// setTimeout(() => {
//     headerDoc.outerHTML = '';
// }, 4000);

// setTimeout(() => {
//     headerDoc.outerHTML += '<div class=new>DIV NEW</div>';
// }, 2000);

// setTimeout(() => {
//     headerDoc.outerHTML = '<div class=new>DIV NEW</div>';
// }, 4000);

//-----------------------//
// const bodyDoc = document.body;
// const firstElem = bodyDoc.firstChild;
// console.log(bodyDoc);
// console.log(firstElem.nodeValue); //будет пусто т.к это пробел в коде
//  console.log(firstElem.data);

//-----------------------//
// const link = document.querySelector('.anch');
// const input = document.querySelector('.inp');
// console.log(link.href);
// console.log(input.value);
// console.log(input.classList);
// console.log(input.classList.contains('inp'));
// console.log(input.classList.add('NEWinp'));
// console.log(document.querySelector("input").classList.add('INPUT'));
// console.log(document.querySelector("input").classList.remove("inp"));
// console.log(document.querySelector("input").classList.replace("INPUT", 'inp'));
// //console.log(document.querySelector('.inp').style.backgroundColor = "teal");
// input.style.backgroundColor = "teal";
// input.style.fontSize="34px";
// console.log(input.style);



//-----------------------//

// const div1id = document.getElementById("div1");
// console.log(div1id.id);
//console.log(div1id.getAttribute('rrr'));
//console.log(div1id.hasAttribute('class'));
//div1id.setAttribute("rrr", "divvvvv");
//div1id.removeAttribute('rrr');

//--------------------------//

// const newDiv = document.createElement('div');
// const newDivText = document.createTextNode('My TEXT');

//newDiv.innerHTML = newDivText;
// newDiv.innerHTML = 'My TEXT';
// console.log(newDiv);
//  const bodyDoc = document.body;
//bodyDoc.append(newDiv);
//bodyDoc.prepend(newDiv);  // bodeDoc.before   after
 
// const bodyDoc = document.body;
// bodyDoc.prepend(newDiv); 
// newDiv.prepend(newDivText);

// newDiv.className = 'newclass';
// newDiv.id = 'newid';
// console.log(newDiv.id);

// setTimeout(() => {
//     newDiv.remove();
// }, 3000);

// const bodyClone = document.body.cloneNode(true); // false
// document.body.after(bodyClone);

// console.log(document.querySelector(".text")
//     .textContent);
// document.querySelector(".text").textContent = "Username: Poly";


//------------------------------//

// const heading = document.createElement("h1");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>
// //document.body.append(heading);
// document.querySelector('.text').append(heading);

//-------------------------------//



// const h2 = document.getElementById("div1");
// let html = "<p>My new paragraph.</p>";
// h2.insertAdjacentHTML("afterend", html);
//---------------//
const galler = document.querySelector('.gallery');
console.log(galler);
console.log(galler.innerHTML);
galler.innerHTML += '<li></li>';