////// MENU SHOW Y HIDDEN//////////
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')



////////// MENU SHOW /////////

// variable if consytant exists
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


//menu hidden//
if(navClose){
    navClose.addEventListener('click',()=> {
    navMenu.classList.remove('show-menu')    
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.addEventListener('click',  () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}))



////////////// TOGGOLE SKILLS /////////////////
const skillsContent = document.getElementsByClassName('skills_content'),
skillsHeader = document.querySelectorAll('.skills_header')


function toggleSkills(){
    let itemClass = this.parentNode.className
    // for(i = 0 ; i < skillsContent.length; i++){
    //     skillsContent[i].className = 'skills_content skills_close'
    // }
    if(itemClass === "skills_content skills_close"){
        this.parentNode.className = 'skills_content skills_open'
    }else{
        this.parentNode.className = 'skills_content skills_close'
    }
}

skillsHeader.forEach(el => {
    el.addEventListener('click', toggleSkills)
})