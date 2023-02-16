//Fechar e abrir o menu
const navMenu = document.getElementById("nav-menu"),
  navAbrir = document.getElementById("nav-abrir"),
  navFechar = document.getElementById("nav-close")
if (navAbrir) {
  navAbrir.addEventListener("click", () => {
    navMenu.classList.add("mostrar-menu")
  })
}
if (navFechar) {
  navFechar.addEventListener("click", () => {
    navMenu.classList.remove("mostrar-menu")
  })
}
//Fechar o menu após selecionar um item
const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("mostrar-menu")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

//Mudar as imagens do portfolio
let swiper = new Swiper(".portfolio_container", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})
//Mudar cor de fundo dos icones ao usar o scroll
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("link-ativo")
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("link-ativo")
    }
  })
}
window.addEventListener("scroll", scrollActive)
//Mudar a cor de fundo da barra de navegação
function scrollHeader() {
  const nav = document.getElementById("header")
  if (this.scrollY >= 80) nav.classList.add("scroll-header")
  else nav.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)
//Dark theme
const themeButton = document.getElementById("tema-button")
const darkTheme = "dark-theme"
const iconTheme = "uil-brightness"

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moonset" : "uil-brightness"

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  )
  themeButton.classList[selectedIcon === "uil-moonset" ? "add" : "remove"](
    iconTheme
  )
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})
