const menu_navbar = document.getElementById('menu_navbar');
const button_home =document.getElementById('button-home');
const button_services = document.getElementById('button-services');
const button_portfolio = document.getElementById('button-portfolio');
const button_about = document.getElementById('button-about');
const button_contact = document.getElementById('button-contact');
const main_block = document.getElementById('main_block');
const html = document.getElementById('html');
const blue_block = document.getElementById('blue_block');
const left_control = document.getElementById('left-control');
const right_control = document.getElementById('right-control');
const main_info = document.getElementById('main-info');
document.documentElement.scrollTop =0;
menu_navbar.addEventListener('click',(event)=>{ //меняется цвет текстa
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
var matrix = [main_info,blue_block]
left_control.onclick = function() {// при нажатии скролл двигается
    if (matrix[0] == blue_block ) {
        blue_block.style.transform = 'translate(-835px, 0)'
        main_info.style.transform = 'translate(9925px, 0)'
        function zMI() {
            main_info.style.transform = 'translate(0px, 0)'
            main_info.style.zIndex = 1;
            }
            setTimeout(zMI, 950); 
            function zMIb() {
                blue_block.style.zIndex = -1;
                blue_block.style.transform = 'translate(5023px, 0)'
                }
            setTimeout(zMIb, 1500); 
    }
    if (matrix[0] == main_info ) {
        blue_block.style.zIndex = 1;
          main_info.style.transform = ('translate(-925px, 0)')
          blue_block.style.transform = ('translate(102px, 0)')
          setTimeout(zMIo, 1000);
          function zMIo() {
            main_info.style.zIndex = -1;
            } 
             
      } 
      matrix.reverse()
}
right_control.onclick = function() {// при нажатии скролл двигается
    if (matrix[0] == blue_block ) {
        blue_block.style.transform = 'translate(1835px, 0)'
        main_info.style.transform = 'translate(-5925px, 0)'
        function zMI() {
            main_info.style.transform = 'translate(0px, 0)'
            main_info.style.zIndex = 1;
            }
            setTimeout(zMI, 1020); 
            function zMIb() {
                blue_block.style.zIndex = -1;
                blue_block.style.transform = 'translate(5023px, 0)'
                }
            setTimeout(zMIb, 1000); 

    }
    if (matrix[0] == main_info ) {
        blue_block.style.zIndex = -1;
          main_info.style.transform = ('translate(925px, 0)')
          blue_block.style.transform = ('translate(-1000px, 0)')
          setTimeout(zMIo, 700);
          function zMIo() {
            main_info.style.zIndex = -1;
            }
            setTimeout(zMIob, 800);
            blue_block.style.transform = 'translate(-7825px, 0)'
            function zMIob() {
                blue_block.style.zIndex = 1;
                blue_block.style.transform = 'translate(103px,0)'
                } 
             
      } 
      matrix.reverse()
}
  


