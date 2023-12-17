const magicBtn = document.querySelector(".js-magic-btn");
const navEl = document.querySelector(".site-nav");

// magicBtn.addEventListener("click", (e) => {
//     navEl.classList.add("super-nav");
// })

// magicBtn.addEventListener("click", (e) => {
//     navEl.classList.toggle("super-nav");
// })

magicBtn.addEventListener("click", (e) => {
    navEl.classList.contains("super-nav");
})