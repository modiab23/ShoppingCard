let username = document.querySelector('#username');
let password = document.querySelector('#password');
let login = document.querySelector('#btn-login');
let getUser= localStorage.getItem("username");
let getPassword= localStorage.getItem("password");

login.addEventListener('click',function(){
    if(username.value===""|| password.value==="" ){
     alert("fill empty");
    }else{
        if((getUser&&getUser==="mohamed") && (getPassword&&getPassword==="123")){
            setTimeout(function(){
                window.location = "index.html";
            },1500 );
        };  
  }
});