
const loginClose = document.getElementsByClassName('js-login-close')[0];
const login = document.getElementsByClassName('js-login')[0];
const loginContainer = document.getElementsByClassName('js-login-container')[0];
const loginBtn = document.getElementsByClassName('js-login-btn')[0];

const loginUser = document.getElementsByClassName('login-user')[0];
const loginName = document.getElementsByClassName('login-name')[0];
const loginOut = document.getElementsByClassName('js-login-out')[0];

loginOut.addEventListener('click', function(){
    localStorage.setItem('isLoggedIn', 'false');
    location.reload();
});
function showLogin(){
    login.classList.add('open');
}
function hideLogin(){
    login.classList.remove('open');
}

loginBtn.addEventListener('click', showLogin);
loginClose.addEventListener('click', hideLogin);
login.addEventListener('click', hideLogin);

loginContainer.addEventListener('click', function(event){
    event.stopPropagation();
});

const registerClose = document.getElementsByClassName('js-register-close')[0];
const register = document.getElementsByClassName('js-register')[0];
const registerContainer = document.getElementsByClassName('js-register-container')[0];
const registerBtn = document.getElementsByClassName('js-register-btn')[0];

function showregister(){
    register.classList.add('open');
}
function hideregister(){
    register.classList.remove('open');
}

registerBtn.addEventListener('click', showregister);
registerClose.addEventListener('click', hideregister);
register.addEventListener('click', hideregister);

registerContainer.addEventListener('click', function(event){
    event.stopPropagation();
})

const email1 = document.getElementById('email1');
const password1 = document.getElementById('password1');
const surname = document.getElementById('surname');
const name1 = document.getElementById('name');
const accountName = document.getElementById('accountName');
const number = document.getElementById('number');
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');
const confirmPassword = document.getElementById('confirmPassword');

const loginBtn2 = document.getElementsByClassName('js-login-btn')[1];
const registerBtn2 = document.getElementsByClassName('js-register-btn')[1];



let storedUser;

function register1(){
    if(surname.value.trim() === "" || name1.value.trim() === ""|| accountName.value.trim() === ""|| number.value.trim() ===""||email2.value.trim() ===""|| password2.value.trim() ===""||confirmPassword.value.trim() ===""){
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }
    else if(validateEmail(email2.value.trim()) === false){
        alert("Email không phù hợp");
        return;
    }
    else if(validatePassword(password2.value.trim()) === false){
        alert("Mật khẩu không phù hợp");
        return;
    }
    else if(validateNumber(number.value.trim()) === false){
        alert("Số điện thoại không phù hợp");
        return;
    }
    else if(confirmPassword.value.trim() != password2.value.trim()){
        alert("Mật khẩu xác nhận không phù hợp");
        return;
    }
    const user = {
        surname: surname.value.trim(),
        name: name1.value.trim(),
        accountName: accountName.value.trim(),
        number: number.value.trim(),
        email: email2.value.trim(),
        password: password2.value.trim()
    };
    localStorage.setItem('user', JSON.stringify(user));
    hideregister();
    alert("Đăng ký thành công");
}

function login1(){
    if(email1.value.trim() === ""|| password1.value.trim() === ""){
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }
    else if(validateEmail(email1.value.trim()) === false){
        alert("Email không phù hợp");
        return;
    }
    else if(validatePassword(password1.value.trim()) === false){
        alert("Mật khẩu không phù hợp");
        return;
    }
    const inputUser = {
        email: email1.value.trim(),
        password: password1.value.trim()
    };
    storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && inputUser.email === storedUser.email && inputUser.password === storedUser.password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
        updateUI(storedUser);
        alert("Đăng nhập thành công");
        hideLogin();
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}
function updateUI(user) {
    loginBtn.classList.add("remove");
    registerBtn.classList.add("remove");
    loginUser.classList.add("open");
    loginName.innerHTML = `Hello ${user.accountName}`;
}

function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
    return emailRegex.test(email);
}

function validateNumber(number){
    const numberRegex = /^\+?(\d{1,4})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return numberRegex.test(number);
}

function validateName(name){
    const nameRegex =  /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
}
function validatePassword(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}


loginBtn2.addEventListener('click', login1);
registerBtn2.addEventListener('click', register1);

const trybutton = document.getElementsByClassName('trybtn');
trybutton[0].addEventListener('click', function(){
    hideLogin();
    showregister();
});

trybutton[1].addEventListener('click', function(){
    hideregister();
    showLogin();
});

document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (isLoggedIn === 'true' && loggedInUser) {
        updateUI(loggedInUser);
    }
});