
let userNameContainer= document.querySelector('#username');
let logoutbtn = document.querySelector('button');



logoutbtn.addEventListener('click',function(e){
    window.location.href='index.html';
})
userName = JSON.parse( localStorage.getItem('username'))
let container = `Welcome ${userName}`;
userNameContainer.innerHTML = container;





