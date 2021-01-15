const nav = document.querySelector('nav')
const fullscreen = document.querySelector('.fullscreen')
const aboutSection = document.querySelector('.about-section')
const stickyNav = document.querySelector('.sticky-nav')
const navLinks = document.querySelectorAll('.sticky-nav p')
const navLinksAfter = document.querySelectorAll('.sticky-nav p span')
const startedBtn = document.querySelector('.center-content a')
const mouseBtn = document.querySelector('.mouse')
// const secondSection = document.querySelector('.second-section')
const thirdSection = document.querySelector('.third-section')
const fourthSection = document.querySelector('.fourth-section')

// const navTl = gsap.timeline()
const navHeight = nav.offsetHeight 

const elementsLocations = ['.fullscreen', '.about-section']

// register Plugin
gsap.registerPlugin(ScrollToPlugin)

navLinks.forEach(item=> item.addEventListener('click', ()=>{
    jumpTo(elementsLocations[0])
}))


window.addEventListener('scroll', getDimensions)

// both scroll to the first section on click
startedBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    jumpTo(elementsLocations[1])
})
mouseBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    jumpTo(elementsLocations[1])
})



function getDimensions(){
    showNav()
    changeLink(fullscreen, navLinks[0], navLinksAfter[0])
    changeLink(aboutSection, navLinks[1], navLinksAfter[1])
    changeLink(thirdSection, navLinks[2], navLinksAfter[2])
    changeLink(fourthSection, navLinks[3], navLinksAfter[3])
}


// makes nav bar hide and show on scroll
function showNav (){
    let windowY = fullscreen.getBoundingClientRect().y
   
    if((navHeight + windowY) < 0){
        gsap.to(stickyNav, 0.5, {translateY: '0%', ease: 'slow'})
    }else{
        gsap.to(stickyNav, 0.5, {translateY: '-100%', ease: 'slow'})
    }
}

//  animates the nav on scroll
function changeLink (element, firstLink, secondLink){
    let bottom = element.getBoundingClientRect().bottom - navHeight
    let topHeight = element.getBoundingClientRect().top - navHeight 
    if(topHeight < 0 && bottom > 0){
        firstLink.classList.add('link-item')
        gsap.to(secondLink, 0.2, {width: '100%', ease: 'slow'})
    }else{
        firstLink.classList.remove('link-item')
        gsap.to(secondLink, 0.2, {width: '0px', ease: 'slow'})
    }
}



function jumpTo(location){
    console.log(123);
    gsap.to(window, 1.5 , {scrollTo: {y: location, offsetY: navHeight}, ease: "circ.out"})
}



