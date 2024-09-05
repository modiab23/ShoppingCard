let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let register = document.querySelector('#btn-register');
register.addEventListener('click',function(){
    if(username.value==="" || email.value===""|| password.value==="" ){
     alert("fill empty");
    }else{
      localStorage.setItem("username",username.value);
      localStorage.setItem("email",email.value);
      localStorage.setItem("password",password.value);
    };
    setTimeout(function(){
        window.location = "login.html"
    },1500 );
});
