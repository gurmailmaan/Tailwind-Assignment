//create variable for both the toggle and menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('#menu');

toggle.addEventListener('click', () => {
    //here we are toggling the menu's hidden class 'hidden'
    menu.classList.toggle('hidden');
});

//or you could the JS supplied by tailwind...

// let toggle = document.querySelector('.toggle');
// toggle.addEventListener('click', function () {
//     let classList = document.getElementById('menu').classList
//     classList.toggle('hidden')
//     classList.toggle('block')
//   })
