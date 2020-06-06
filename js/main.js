        // single element 
        // console.log(document.getElementById('my-form'));
        // console.log(document.querySelector('h1'));

        //multiple element
        // console.log(document.querySelectorAll('.item'));
        // console.log(document.getElementsByClassName('item'));


        // const ul = document.querySelector('.items');

        // // ul.remove();
        // // ul.lastElementChild.remove();
        // ul.firstElementChild.textContent = 'hello';
        // ul.children[1].innerText = 'vijay';
        // ul.lastElementChild.innerHTML = '<h1>HARISH</h1>'

        // const btn = document.querySelector('.btn');
        // btn.style.background = 'red';
        // btn.style.borderRadius = '0px';

        // const btn = document.querySelector('.btn');

        // btn.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     // console.log(e.target.className);
        //     document.querySelector('#my-form').style.background = '#ccc';
        //     document.querySelector('body').classList.add('bg-dark');
        // });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

     if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = ('Please Enter All Fields');

        setTimeout(()=> msg.remove(), 3000);
     } else {
         const li= document.createElement('li');
         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

         userList.appendChild(li);

         //clear fields
         nameInput.value = '';
         emailInput.value = '';
     }
}