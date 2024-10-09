function newFunction() {
    const hamburger = document.getElementsByClassName('hamburger')[0];
    const navLinks = document.getElementsByClassName('navlinks')[0];
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
newFunction();
var t1 = gsap.timeline();
t1.from(".white p", {
    x: "-100vw",
    duration: 2,
    stagger:0.3,
}) 
t1.from(".white h1", {
    x: "100vw",
    duration: 2,
    stagger:0.3,
}) 
t1.to("#loader", {
    top: "-100vh",
    duration:2,
})
gsap.from(".navlogo img,.search,.navlinks li,.navlog li,.items h3",{
    y:-100,
    delay:5,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".navlogo img,.search,.navlinks li,.navlog li,.items h3",
        scroller:"body",
        marker:true,
        start:"top 0%",
    }
})
gsap.from(".brands h3",{
    y:-100,

    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".brands h3",
        scroller:"body",
        marker:true,
        start:"top 50%",
    }
})
gsap.from("#shoes .new h4,#shoes #cards .first div,#shoes #cards .second div", {
    x:-100,

    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#shoes .new h4,#shoes #cards .first div,#shoes #cards .second div",
        scroller:"body",
        marker:true,
        start:"top 50%",
    }
    
})
gsap.from("#cloths img",{
    scale:0,
    
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#cloths img",
        scroller:"body",
        marker:true,
        start:"top 50%",
    }
})
gsap.from("#cloths .menimg h3,#cloths .womenimg h3",{
    x:-100,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#cloths .menimg h3,#cloths .womenimg h3",
        scroller:"body",
        marker:true,
        start:"top 0%",
    }
})
gsap.from("#school div",{
    scale:0,
   
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#school div",
        scroller:"body",
        
    }
})
gsap.from("#menscloths.new h4,#menscloths #cards .first div,#menscloths #cards .second div", {
    x:-100,
    
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#menscloths.new h4,#menscloths #cards .first div,#menscloths #cards .second div",
        scroller:"body",
        marker:true,
        start:"top 50%",
    }
})
gsap.from("#womenscloths.new h4,#womenscloths #cards .first div,#womenscloths #cards .second div", {
    x:-100,
   
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#womenscloths.new h4,#womenscloths #cards .first div,#womenscloths #cards .second div",
        scroller:"body",
        marker:true,
        start:"top 50%",
    }
})