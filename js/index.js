// why when selecting element with nextelementsibling it makes error
let nameInput = document.querySelector('input');
let emailInput = nameInput.nextElementSibling;
let passInput = emailInput.nextElementSibling;
let warnIncorrect = passInput.nextElementSibling;
let warnEmpty = warnIncorrect.nextElementSibling;
let loginbutton = document.querySelector('button');
let signUpbutton = loginbutton.nextElementSibling;
let signUpStatement= document.querySelector('h4');
let signUplink = document.querySelector('#signUplink');
let signInStatement = signUpStatement.nextElementSibling;
let signInlink = document.querySelector('#signInlink');
let valid = warnEmpty.nextElementSibling;

if(localStorage.getItem('persons')!=null){
    data=JSON.parse(localStorage.getItem('persons'));
}else{
    data=[];
}

loginbutton.addEventListener('click',function(e){
    if(login()){
        window.location.href='home.html';
    }
    
})
let userName;
function login(){
    for(let i=0;i<data.length;i++){
        if(emailInput.value == data[i].email && passInput.value == data[i].pass){
            if(!warnIncorrect.classList.contains('d-none')){
                warnIncorrect.classList.add('d-none');

            }else if(!warnEmpty.classList.contains('d-none')){
                warnEmpty.classList.add('d-none');
            }
            userName=data[i].name;
            console.log('hello correct',userName);
            localStorage.setItem('username',JSON.stringify(userName));
            clear();
            return true;
        }
    }
    if(emailInput.value == '' || passInput.value == ''){
        if(!warnIncorrect.classList.contains('d-none')){
            warnIncorrect.classList.add('d-none');
        }
        warnEmpty.classList.remove('d-none');
        console.log('empty inputs');
        return 0;
    }
    warnIncorrect.classList.remove('d-none');
    clear();
    return 0;
}
signUplink.addEventListener('click',function(e){
    e.preventDefault();
    signUp();
})

function signUp(){
    clear();
    nameInput.classList.remove('d-none');
    signUpbutton.classList.remove('d-none');
    loginbutton.classList.add('d-none');
    signUpStatement.classList.add('d-none');
    signInStatement.classList.remove('d-none');
}


function add(){
    if(nameInput.value==''){
        warnEmpty.classList.remove('d-none');
        console.log('empty inputs');
        return 0;
    }
    let person={
        name: nameInput.value,
        email: emailInput.value,
        pass: passInput.value
    }
    data.push(person);
    localStorage.setItem('persons',JSON.stringify(data));
    clear();
    valid.classList.remove('d-none')

}

function clear(){
    nameInput.value=null;
    emailInput.value=null;
    passInput.value=null;
}














