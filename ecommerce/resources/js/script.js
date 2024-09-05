let userLink = document.querySelector('#user-link');
let userInfo = document.querySelector('#user-info');
let user = document.querySelector('#user');
let logout = document.querySelector("#logout");
if(localStorage.getItem("username")){
   userLink.remove();
   userInfo.style.display = "block"
   user.innerHTML =localStorage.getItem("username");

   logout.addEventListener("click",function(){
   localStorage.clear();
   setTimeout(function(){
      window.location = "register.html"
  },1500 );
});
};

/* product */
let homeParent = document.querySelector(".home-parent");
let checkedLogin = document.querySelector("#checkedLogin");
let products = [
   {
   id : 1,
   title: "germany car",
   ImageUrl:"resources/img/vehicle-2.png",
},
{
   id : 2,
   title: "england car",
   ImageUrl:"resources/img/vehicle-3.png",
},
{
   id : 3,
   title: "italy car",
   ImageUrl:"resources/img/vehicle-4.png",
},
{
   id : 4,
   title: "japan car",
   ImageUrl:"resources/img/vehicle-5.png",
},
];

function drawProducts (){
 let productUI= products.map(function(item){
     return`
     <div class="home-son">
        <div class="home-image">
            <img src="${item.ImageUrl}">
        </div>
        <div class="home-text">
            <h2>${item.title}</h2>
            <p>modern car and fantastic model</p>
        </div>
        <div class="home-info">
            <a href="#" onclick = "checkedLoginUser()" id = "checkedLogin"><button>add to cart</button></a>
            <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
       </div>
     ` 
     });
     homeParent.innerHTML = productUI;
};
drawProducts();

function checkedLoginUser (){
    if(localStorage.getItem("username")){
    console.log("yes")
   }else{
      window.location = "login.html"
   }
}
