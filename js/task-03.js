const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// nameInput.addEventListener('input', function() {
//     const trimmedValue = this.value.trim(); // Очищення значення від пробілів по краях

//     if (trimmedValue === '') {
//         nameOutput.textContent = 'Anonymous';
//     } else {
//         nameOutput.textContent = trimmedValue;
//     }
// });



//   nameInput.addEventListener('input', function() {
//     const trimmedValue = nameInput.value.trim();
//     nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
//   });




nameInput.addEventListener('input', function () {
    const trimValue = nameInput.value.trim();

    if (trimValue) {
        nameOutput.textContent = trimValue; 
    } else {
        nameOutput.textContent = 'Anonymous'; 
    }
});

// nameInput.addEventListener('input', () => {
//     // const trimValue = nameInput.value.trim();

//     // if (trimValue) {
//     //     nameOutput.textContent = trimValue;
//     // } else {
//     //     nameOutput.textContent = 'Anonymous';
//     // }
//     const text = nameInput.value.trim();
//     nameOutput.innerHTML = `${text}`;
// });