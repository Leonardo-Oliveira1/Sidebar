const menu = document.querySelector(".sidebar")
const searchbox = document.querySelector(".search")

const sidebar = () => {
    menu.classList.toggle('sidebarActive');
}

const search = () =>{
    menu.setAttribute('class', 'sidebar sidebarActive')
}


