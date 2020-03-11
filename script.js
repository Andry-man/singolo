const menu_navbar = document.getElementById('menu_navbar');
const button_home =document.getElementById('button-home')
const button_services = document.getElementById('button-services')
const button_portfolio = document.getElementById('button-portfolio')
const button_about = document.getElementById('button-about')
const button_contact = document.getElementById('button-contact')
const main_block = document.getElementById('main_block')
const html = document.getElementById('html')
document.documentElement.scrollTop =0;
menu_navbar.addEventListener('click',(event)=>{ //меняется цвет текста
    menu_navbar.querySelectorAll('li').forEach(el=>el.classList.remove('activeNav'));
    event.target.classList.add('activeNav');

})
    document.addEventListener('scroll',()=>{ //при движении скролла переключается класс (меняется цвет текста)
        if (document.documentElement.scrollTop < 595) {
            menu_navbar.querySelectorAll('li').forEach(el=>el.classList.remove('activeNav'));
            button_home.classList.add('activeNav');
        }
        if (document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1101) {
            menu_navbar.querySelectorAll('li').forEach(el=>el.classList.remove('activeNav'));
            button_services.classList.add('activeNav');
        }
        if (document.documentElement.scrollTop > 1101 && document.documentElement.scrollTop < 1970) {
            menu_navbar.querySelectorAll('li').forEach(el=>el.classList.remove('activeNav'));
            button_portfolio.classList.add('activeNav');
        }
        if (document.documentElement.scrollTop > 1960 && document.documentElement.scrollTop < 2604) {
            menu_navbar.querySelectorAll('li').forEach(el=>el.classList.remove('activeNav'));
            button_about.classList.add('activeNav');
        }
        if (document.documentElement.scrollTop > 2670) {
            menu_navbar.querySelectorAll('li').forEach(el=>el.classList.remove('activeNav'));
            button_contact.classList.add('activeNav');
        }
      })
button_home.onclick = function() {// при нажатии скролл двигается
    document.documentElement.scrollTop =0;
}
button_services.onclick = function() {
    document.documentElement.scrollTop =605;
}
button_portfolio.onclick = function() {
    document.documentElement.scrollTop =1110;
}
button_about.onclick = function() {
    document.documentElement.scrollTop =1970;
}
button_contact.onclick = function() {
    document.documentElement.scrollTop =2704;
}

