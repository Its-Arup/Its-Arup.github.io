let menu = document.querySelector(".menu")
let nav_menu = document.querySelector(".nav-menu")

menu.addEventListener("click",() =>{
    menu.classList.toggle("active")
    nav_menu.classList.toggle("active")
})

document.querySelectorAll(".nav-links").forEach((e)=>{
    e.addEventListener("click",()=>{
        menu.classList.toggle("active")
        nav_menu.classList.toggle("active")
    })
})

function resumeDownload(){
    window.open(
       "https://drive.google.com/file/d/1y4cLjeWSNTa4THsMxYXMW3dYPmdrS3Ll/view?usp=sharing"
      );
}


let githubBtn = document.querySelector("#contact-github");

githubBtn.addEventListener('click',function(){
    
    window.open(
        "https://github.com/Its-Arup",
        "_blank"
      );

})

let linkedinBtn = document.querySelector(".fa-linkedin");

linkedinBtn.addEventListener('click',function(){
    
    window.open(
        "https://www.linkedin.com/in/arup-paul13",
        "_blank"
      );

})

let contactBtn = document.querySelector("#contact-btn");

contactBtn.addEventListener('click',function(){
    
    window.location.href = '#contact';

})
