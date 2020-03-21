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
const button_mob_one = document.getElementById('button-mob_one');
const img_mob1 = document.getElementById('img_mob1');
const button_mob_two = document.getElementById('button-mob_two');
const img_mob2 = document.getElementById('img_mob2');
const button_portfolio_tag = document.getElementById('button_portfolio_tag');
const button_tag_all = document.getElementById('button_tag_all');
const button_tag_webD = document.getElementById('button_tag_webD');
const button_tag_GD = document.getElementById('button_tag_GD');
const button_tag_artWork = document.getElementById('button_tag_artWork');
const galleria_section_one = document.getElementById('galleria-section_one');
const galleria_section_two = document.getElementById('galleria-section_two');
const galleria_section_tree = document.getElementById('galleria-section_tree');
document.documentElement.scrollTop =0;
menu_navbar.addEventListener('click',(event)=>{ //меняется цвет текстa
    menu_navbar.querySelectorAll('li').forEach(el=>el.classList.remove('activeNav'));
    event.target.classList.add('activeNav');
    if (menu_navbar.classList.length == 2 ) {
        menu_navbar.classList.remove('activeNav')
    }
    

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
var matrix = [main_info,blue_block];
left_control.onclick = function() {// при нажатии слайдер двигается
    if ( document.documentElement.clientWidth <= 375) {
        if (matrix[0] == blue_block ) {
            blue_block.style.transform = 'translate(-835px, 0)'
            main_info.style.transform = 'translate(9925px, 0)'
            main_block.style.backgroundColor = '#f06c64'
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
              main_block.style.backgroundColor = '#648bf0'
              blue_block.style.transform = ('translate(66px, 0)')
              setTimeout(zMIo, 1000);
              function zMIo() {
                main_info.style.zIndex = -1;
                } 
                 
          } 
          matrix.reverse()

        }
        if (document.documentElement.clientWidth != 375 ) {
            if (matrix[0] == blue_block ) {
                blue_block.style.transform = 'translate(-835px, 0)'
                main_info.style.transform = 'translate(9925px, 0)'
                main_block.style.backgroundColor = '#f06c64'
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
                  main_block.style.backgroundColor = '#648bf0'
                  blue_block.style.transform = ('translate(102px, 0)')
                  setTimeout(zMIo, 1000);
                  function zMIo() {
                    main_info.style.zIndex = -1;
                    } 
                     
              } 
              matrix.reverse()
        }
}
right_control.onclick = function() {// при нажатии слайдер двигается
    if (document.documentElement.clientWidth != 375) {
        if (matrix[0] == main_info ) {
            blue_block.style.zIndex = -1;
              main_info.style.transform = ('translate(925px, 0)')
              blue_block.style.transform = ('translate(-1000px, 0)')
              main_block.style.backgroundColor = '#648bf0'
              setTimeout(zMIo, 700);
              function zMIo() {
                main_info.style.zIndex = -1;
                }
                setTimeout(zMIob, 900);
                blue_block.style.transform = 'translate(-7825px,0)'
                function zMIob() {
                    blue_block.style.zIndex = 1;
                    blue_block.style.transform = 'translate(103px,0)'
                    } 
                 
          } 
        if (matrix[0] == blue_block ) {
            blue_block.style.transform = 'translate(1835px, 0)'
            main_block.style.backgroundColor = '#f06c64'
            main_info.style.transform = 'translate(-4450px, 0)'
            function zMI() {
                main_info.style.transform = 'translate(0px, 0)'
                main_info.style.zIndex = 1;
                }
                setTimeout(zMI, 1020); 
                function zMIb() {
                    blue_block.style.zIndex = -1;
                    blue_block.style.transform = 'translate(103px, 0)'
                    }
                setTimeout(zMIb, 1000); 
        }
          matrix.reverse()
    }

    if (document.documentElement.clientWidth == 375) {
        if (matrix[0] == blue_block ) {
            blue_block.style.transform = 'translate(1835px, 0)'
            main_info.style.transform = 'translate(-5925px, 0)'
            main_block.style.backgroundColor = '#f06c64'
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
              main_block.style.backgroundColor = '#648bf0'
              blue_block.style.transform = ('translate(-1000px, 0)')
              setTimeout(zMIo, 700);
              function zMIo() {
                main_info.style.zIndex = -1;
                }
                setTimeout(zMIob, 800);
                blue_block.style.transform = 'translate(-7825px, 0)'
                function zMIob() {
                    blue_block.style.zIndex = 1;
                    blue_block.style.transform = 'translate(66px,0)'
                    } 
                 
          } 
          matrix.reverse()
    }
}
  
let counter = 0 
button_mob_one.onclick = function() {  // при нажатии исчезает картинка на дисплее мобилки
counter+=1
if ( counter%2 == true ) {
 img_mob1.style.opacity = 0;
}
if ( counter%2 == false ) {
img_mob1.style.opacity = 1;
   }
}
let countertwo = 0 
button_mob_two.onclick = function() { // при нажатии исчезает картинка на дисплее мобилки
    counter+=1
countertwo+=1
if ( countertwo%2 == true ) {
img_mob2.style.opacity = 0;
}
if ( countertwo%2 == false ) {
img_mob2.style.opacity = 1;
   }
}
button_portfolio_tag.addEventListener('click',(event)=>{ //меняется цвет фона в кнопках portfolio
    button_portfolio_tag.querySelectorAll('img').forEach(el=>el.classList.remove('button_active_portfotio'));
    event.target.classList.add('button_active_portfotio');
})
const section_one_img_1 = document.getElementById('section_one_img_1');
const section_one_img_2 = document.getElementById('section_one_img_2');
const section_one_img_3 = document.getElementById('section_one_img_3');
const section_one_img_4 = document.getElementById('section_one_img_4');
const section_two_img_1 = document.getElementById('section_two_img_1');
const section_two_img_2 = document.getElementById('section_two_img_2');
const section_two_img_3 = document.getElementById('section_two_img_3');
const section_two_img_4 = document.getElementById('section_two_img_4');
const section_tree_img_1 = document.getElementById('section_tree_img_1');
const section_tree_img_2 = document.getElementById('section_tree_img_2');
const section_tree_img_3 = document.getElementById('section_tree_img_3');
const section_tree_img_4 = document.getElementById('section_tree_img_4');
let arr = [section_one_img_1,section_one_img_2,section_one_img_3,section_one_img_4,section_two_img_1,section_two_img_2, section_two_img_3, section_two_img_4,section_tree_img_1,section_tree_img_2,section_tree_img_3,section_tree_img_4] 
let count = 0;
let countcopy = 0;
let countOn = 1;
let countRev = 11;
button_tag_all.onclick = function() { //кнопка в тег-баре Portfolio 'all'
    arr[count].style.opacity=0;
    function imgOpacity() {
        arr[count].style.opacity=1;
            }
            setTimeout(imgOpacity, 800); 

    for (let i = 0; i <500; i++) {
function one() {
arr[0].src = arr[11].src
}
setTimeout(one, 50);  
function two() {
arr[11].src = arr[10].src
}
setTimeout(two, 100); 
function tree() {
arr[10].src = arr[9].src
}
setTimeout(tree, 150); 
function four() {
arr[9].src = arr[8].src
}
setTimeout(four, 200); 
function five() {
arr[8].src = arr[7].src
}
setTimeout(five, 250); 
function six() {
arr[7].src = arr[6].src
}
setTimeout(six, 300); 
function seven() {
arr[6].src = arr[5].src
}
setTimeout(seven, 350); 
function s8() {
arr[5].src = arr[4].src
}
setTimeout(s8, 400); 
function s9() {
arr[4].src = arr[3].src
}
setTimeout(s9, 450); 
function s10() {
arr[3].src = arr[2].src
}
setTimeout(s10, 500); 
function s11() {
arr[2].src = arr[1].src
}
setTimeout(s11, 550); 
function s12() {
arr[1].src = arr[0].src
}
setTimeout(s12, 600); 
        break
    }
}
button_tag_webD.onclick = function() { //кнопка в тег-баре Portfolio 'Web Design'
    arr[count].style.opacity=0;
    function imgOpacity() {
        arr[count].style.opacity=1;
            }
            setTimeout(imgOpacity, 800); 
    for (let i = 0; i <500; i++) {
function one() {
arr[11].src = arr[0].src
}
setTimeout(one, 50);  
function two() {
arr[0].src = arr[1].src
}
setTimeout(two, 100); 
function tree() {
arr[1].src = arr[2].src
}
setTimeout(tree, 150); 
function four() {
arr[2].src = arr[3].src
}
setTimeout(four, 200); 
function five() {
arr[3].src = arr[4].src
}
setTimeout(five, 250); 
function six() {
arr[4].src = arr[5].src
}
setTimeout(six, 300); 
function seven() {
arr[5].src = arr[6].src
}
setTimeout(seven, 350); 
function s8() {
arr[6].src = arr[7].src
}
setTimeout(s8, 400); 
function s9() {
arr[7].src = arr[8].src
}
setTimeout(s9, 450); 
function s10() {
arr[8].src = arr[9].src
}
setTimeout(s10, 500); 
function s11() {
arr[9].src = arr[10].src
}
setTimeout(s11, 550); 
function s12() {
arr[10].src = arr[11].src
}
setTimeout(s12, 600); 
        break
    }


}
button_tag_GD.onclick = function() { //кнопка в тег-баре Portfolio 'Graphic Design'

galleria_section_one.style.opacity = 0
galleria_section_two.style.opacity = 0
galleria_section_tree.style.opacity = 0
function GD() {
galleria_section_one.style.opacity = 1
galleria_section_two.style.opacity = 1
galleria_section_tree.style.opacity = 1
}
setTimeout(GD, 600);
if ( countertwo%2 == true ) {
galleria_section_one.style.flexDirection = 'row'
galleria_section_two.style.flexDirection = 'row'
galleria_section_tree.style.flexDirection = 'row'
arr[8].style.marginRight = '2.1%'
arr[9].style.marginRight = '2%'
arr[10].style.marginRight = '0.3%'
arr[11].style.marginLeft = '1.7%'
}
if ( countertwo%2 == false ) {
    galleria_section_one.style.flexDirection = 'row-reverse'
    galleria_section_two.style.flexDirection = 'row-reverse'
    galleria_section_tree.style.flexDirection = 'row-reverse'
    arr[8].style.margin = 'auto'
    arr[9].style.margin = 'auto'
    arr[10].style.margin = 'auto'
    arr[11].style.margin = 'auto'
    }

countertwo++
}
button_tag_artWork.onclick = function() { //кнопка в тег-баре Portfolio 'Artwork'
    galleria_section_one.style.opacity = 0;
    galleria_section_two.style.opacity = 0;
    galleria_section_tree.style.opacity = 0;
    function artWorkOpacity() {
        galleria_section_one.style.opacity = 1;
        galleria_section_two.style.opacity = 1;
        galleria_section_tree.style.opacity = 1;
        }
        setTimeout(artWorkOpacity, 600); 
setTimeout(artWork, 600);
function artWork() {
if ( countertwo%2 == true ) {
    galleria_section_one.children[0].src = galleria_section_two.children[0].src
    galleria_section_two.children[0].src = galleria_section_tree.children[0].src
    
    galleria_section_one.children[1].src = galleria_section_two.children[1].src
    galleria_section_two.children[1].src = galleria_section_tree.children[1].src
    
    galleria_section_one.children[2].src = galleria_section_two.children[2].src
    galleria_section_two.children[2].src = galleria_section_tree.children[2].src
    
    galleria_section_one.children[3].src = galleria_section_two.children[3].src
    galleria_section_two.children[3].src = galleria_section_tree.children[3].src
    
    galleria_section_one.children[4].src = galleria_section_two.children[4].src
    galleria_section_two.children[4].src = galleria_section_tree.children[4].src
}
if ( countertwo%2 == false ) {
    galleria_section_one.children[0].src =  galleria_section_one.children[0].src 
    galleria_section_two.children[0].src =  galleria_section_two.children[0].src
    
    galleria_section_tree.children[0].src = galleria_section_tree.children[0].src
    galleria_section_one.children[1].src = galleria_section_one.children[1].src
    
    galleria_section_two.children[1].src = galleria_section_two.children[1].src
    galleria_section_tree.children[1].src = galleria_section_tree.children[1].src
    
    galleria_section_one.children[2].src = galleria_section_one.children[2].src
    galleria_section_two.children[2].src = galleria_section_two.children[2].src
    
    galleria_section_tree.children[2].src = galleria_section_tree.children[2].src
    galleria_section_one.children[3].src = galleria_section_one.children[3].src
    galleria_section_two.children[3].src = galleria_section_two.children[3].src
    galleria_section_tree.children[3].src = galleria_section_tree.children[3].src
    galleria_section_one.children[4].src = galleria_section_one.children[4].src
    galleria_section_two.children[4].src = galleria_section_two.children[4].src
    galleria_section_tree.children[4].src = galleria_section_tree.children[4].src
    }
}
countertwo++
}
galleria_section_one.addEventListener('click',(event)=>{ //рамка для картинок первого блока 
    galleria_section_one.querySelectorAll('img').forEach(el=>el.classList.remove('img_border'));
    galleria_section_two.querySelectorAll('img').forEach(el=>el.classList.remove('img_border'));
    galleria_section_tree.querySelectorAll('img').forEach(el=>el.classList.remove('img_border'));
    event.target.classList.add('img_border');
})
galleria_section_two.addEventListener('click',(event)=>{ //рамка для картинок второго блока 
    galleria_section_one.querySelectorAll('img').forEach(el=>el.classList.remove('img_border'));
    galleria_section_two.querySelectorAll('img').forEach(el=>el.classList.remove('img_border'));
    galleria_section_tree.querySelectorAll('img').forEach(el=>el.classList.remove('img_border'));
    event.target.classList.add('img_border');
})
galleria_section_tree.addEventListener('click',(event)=>{ //рамка для картинок 3-го блока 
    galleria_section_one.querySelectorAll('img').forEach(el=>el.classList.remove('img_border'));
    galleria_section_two.querySelectorAll('img').forEach(el=>el.classList.remove('img_border'));
    galleria_section_tree.querySelectorAll('img').forEach(el=>el.classList.remove('img_border'));
    event.target.classList.add('img_border');
})
const input_name = document.getElementById('input_name');
const input_email = document.getElementById('input_email');
const input_subject = document.getElementById('input_subject');
const input_textarea = document.getElementById('input_textarea');
const button_form = document.getElementById('button_form');
const span_subject = document.getElementById('span_subject');
const span_textarea = document.getElementById('span_textarea');
const message_block_ok = document.getElementById('message-block_ok');
const message_block = document.getElementById('message-block');
let name = input_name;
button_form.onclick = function() { 

if (input_subject.value["length"] != 0) {
span_subject.innerHTML = `Тема:${input_subject.value}`
}
if (input_subject.value["length"] = 0) {
span_subject.innerHTML = `Без темы`
}
if (input_textarea.value["length"] !=0) {
span_textarea.innerHTML = `Описание:${input_textarea.value}`
}
if (input_textarea.value["length"] = 0) {
span_textarea.innerHTML = `Без описания`
}
event.preventDefault()
message_block.style.display = 'block'
}
message_block_ok.onclick = function() { 
message_block.style.display = 'none'
form.reset()
    }

const burger_menu_button = document.getElementById('burger_menu_button');
const header_container = document.getElementById('header_container');
burger_menu_button.onclick = function() { 
counter+=1
if ( counter%2 == true ) {
    burger_menu_button.style.transform = 'rotate(-90deg)'
    header_container.style.transform = 'translate(0px, 0)'
}
if ( counter%2 == false ) {
    burger_menu_button.style.transform = 'rotate(0deg)'
    header_container.style.transform = 'translate(-470px, 0)'
   }
}