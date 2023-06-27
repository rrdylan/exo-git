
const button = document.getElementById("mybutton");
const message = document.getElementById("message");
const nav_button = document.getElementById("nav_btn_1");


button.addEventListener("click", function(){
    message.textContent = "titi";
});

nav_button.addEventListener('click',(e)=>{
    console.log("Toto");
});