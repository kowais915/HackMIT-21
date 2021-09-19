const button = document.getElementById('signIn-button');



const userName = document.getElementById('name');
const userEmail = document.getElementById('email');



button.addEventListener('click', ()=>{

alert(userName.value + " " + userEmail.value);


})