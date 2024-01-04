// const form = document.forms;
// //console.log(form);
// const myForm = document.querySelector('.login-form');
// console.log(myForm);
// const emailInput = myForm.elements.password;
// console.log(emailInput.value);
// console.log(emailInput);
// console.log(emailInput.form);

// const myForm = document.querySelector('.login-form');
// const passwordInput = myForm.elements['password']; // Accessing by name attribute
// console.log(passwordInput);

// const logForm = document.querySelector('.login-form');

//     logForm.addEventListener('submit', function(event) {
//       event.preventDefault(); // Предотвращаем перезагрузку страницы

//       const emailInput = logForm.elements['email'];
//     const passwordInput = logForm.elements['password'];
//         const trimEmailInput = emailInput.value.trim();
//         const trimPasswordInput = passwordInput.value.trim();

      // Проверяем, заполнены ли все поля
    //   if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    //     alert('All form fields must be filled in');
    //     return;
    //   }
        
    //      if (trimEmailInput === '' || trimPasswordInput=== '') {
    //     alert('All form fields must be filled in');
    //     return;
    //   }

      // Собираем значения полей в объект
    //   const logFormData = {
    //     email: emailInput.value.trim(),
    //     password: passwordInput.value.trim()
    //   };
        
// const logFormData = {
//         trimEmailInput,
//         trimPasswordInput,
//       };
        
        
      // Выводим объект с введенными данными в консоль
    //   console.log(logFormData);

    //   // Очищаем значения полей формы
    //   logForm.reset();
    // });



const logForm = document.querySelector('.login-form');
    


    logForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

        const emailInput = logForm.elements['email'];
        const passwordInput = logForm.elements['password'];
        const trimEmailInput = emailInput.value.trim();
        const trimPasswordInput = passwordInput.value.trim();

         if (trimEmailInput === '' || trimPasswordInput === '') {
        alert ('All form fields must be filled in');
        return;
         }
        const logFormData = {
        trimEmailInput,
        trimPasswordInput,
        };

         console.log(logFormData);

      logForm.reset();
    });