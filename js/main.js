const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const menuNav = document.querySelector(".menu-nav")
const menuBranding = document.querySelector(".menu-branding")

const navItems = document.querySelectorAll(".nav-item")

let showMenu = false;

console.log("menu pressed!")
menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if(!showMenu){
        console.log("menu true")
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBranding.classList.add('show')
        navItems.forEach(item => {
            item.classList.add('show')
        })
        
        showMenu = true
    }else{
        console.log("menu false")
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach(item => {
            item.classList.remove('show')
        })
        showMenu = false
    }
}