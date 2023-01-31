const navMenu = document.querySelector(".nav-menu")
const hamburgerButton = document.querySelector(".menu-button")
const hamburgerIcon = document.querySelector(".menu")
const xIcon = document.querySelector(".x")

const mediaQuery = window.matchMedia('(min-width: 1000px)')


hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("hidden")
    hamburgerIcon.classList.toggle("opacity")
    xIcon.classList.toggle("opacity")
})

function mQuery(){
    if(mediaQuery.matches){
        navMenu.classList.remove("hidden")
    }else{}
}

mQuery()

