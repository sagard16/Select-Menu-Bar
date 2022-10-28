const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialLinstEl = document.querySelector(".social-lists");
const liEl = document.querySelectorAll("li");




menuEl.addEventListener("click", ()=>{
   socialLinstEl.classList.toggle("hide")
   menuEl.classList.toggle("rotate")
})


liEl.forEach(liEls=>{
    liEls.addEventListener("click", ()=>{
        menuTextEl.innerHTML = liEls.innerHTML
        socialLinstEl.classList.add("hide")
        menuEl.classList.toggle("rotate")
    })
})