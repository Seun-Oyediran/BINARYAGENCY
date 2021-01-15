const header = document.querySelector('.header')
const image = document.querySelector('.float')
const hamburger = document.querySelectorAll('.hamburger')
const closeBtn = document.querySelector('.close-btn')
const centerText = document.querySelectorAll('.center-content h2')



// adding event listeners
header.addEventListener("mousemove", mouseHandler);
header.addEventListener('mouseleave', mouseLeaveHandler)
header.addEventListener('mouseenter', mouseEntered)
hamburger.forEach(item=> item.addEventListener('click', ()=>{
    menu.play()
}))
closeBtn.addEventListener('click', ()=>{
    menu.reverse()
})
document.querySelector('.sidemenu').addEventListener('click', (e)=>{
    if(e.target.classList.contains('sidemenu')){
        menu.reverse()
    }
})



// gsap init
const tl = gsap.timeline()
const ball = gsap.timeline({repeat: -1})
const menu = gsap.timeline({reversed: true})
const text = gsap.timeline()
const loaderTl = gsap.timeline()

// function that checks for Animation
function checkAnimation (params){
    if(params.reversed()){
        params.play()
    }else{
        params.reverse()
    }
}


// animation to remove loader
loaderTl.to('.loader', 3, {delay:4, opacity: 0, display: 'none', ease: 'slow'})
    .to('.loading',0.1, { display:'block'}, '-=3')
    .to('.loading',3, {opacity: 1, display:'block', ease: 'slow'}, '-=2')


// center text Animation
text.to(centerText[0], 1.5, {delay:6, y: 10, scaleX: 0.75, ease: 'slow',opacity: 0, display: 'none'}, '+=3')
    .to(centerText[1], 0.5, {translateY: 0, scaleX: 1, ease: 'slow',opacity: 1, display: 'block'})
    .to(centerText[1], 1.5, {y: 10, scaleX: 0.75, ease: 'slow',opacity: 0, display: 'none'}, '+=3')
    .to(centerText[2], 0.5, {translateY: 0, scaleX: 1, ease: 'slow',opacity: 1, display: 'block'})




// sidemenu animation
menu.to('.sidemenu', 0.1, { display: 'block',opacity:1, ease: 'slow'})
    .to('.menu', {translateX: '0' })
    .to('.menu > div > div', {opacity: 1, translateY: '0', stagger: 0.05})


// tiny ball Animation
ball.to('.small-ball', 0.75, {y: '0px',opacity: 1, ease: 'slow(0.7, 0.7, false)'}, '+=1.5')
    .to('.small-ball', 1, {opacity: 0, ease: 'slow(0.7, 0.7, false)'})



function mouseHandler (e){
    let center = header.offsetWidth / 2
    let disp = (center - e.x)/5
    let centerY = header.offsetHeight / 2
    let dispY = (centerY - e.y)/3
    setBoxPosition(disp, dispY)
}

function mouseLeaveHandler (e){
    gsap.to('.center-box',0.5, {x: 0,y:0, ease: "slow(0.7, 0.7, false)"})
    gsap.to('.float', 0.3, {x: 0,y:0, ease: "slow(0.7, 0.7, false)"}, '-=1')
}

function mouseEntered(e){
    let center = header.offsetWidth / 2
    let disp = (center - e.x)/5
    let centerY = header.offsetHeight / 2
    let dispY = (centerY - e.y)/3
    gsap.to('.center-box', 0.5, {x: disp, y:dispY, ease: "slow(0.7, 0.7, false)"})
    gsap.to('.float', 0.5, {x: -(disp/2), y:-(dispY/2), ease: "slow(0.7, 0.7, false)"}, '-=1')
}

// stes position for centrl box
function setBoxPosition (x, y){
    gsap.to('.center-box', 0.1, {x, y, ease: "slow(0.7, 0.7, false)"})
    gsap.to('.float', 0.1, {x: -(x/2), y: -(y/2), ease: 'slow(0.7, 0.7, false)'})
}

