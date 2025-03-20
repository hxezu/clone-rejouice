function loader(){
    var tl = gsap.timeline()
    tl.from(".loader span",{x:100, duration : 1.2, stagger : .03, delay :.1})
    tl.to('.loader span',{x:-100, duration:.6, opacity:0, stagger:.03})
    tl.to('.loader',{duration :0.5, opacity: 0, display : 'none'})
    tl.from('.page1 .inner-content h1 span',{ y:60, duration :.5, delay:-.3, stagger :.0 })
}

function crsrAnim(){
    const cursor = document.querySelector('.cursor');
    const innerContent = document.querySelector('.inner-content');

    innerContent.addEventListener('mousemove', (e)=>{
        gsap.to(cursor,{ x:e.x+'px', y:e.y+'px'})
    })

    innerContent.addEventListener('mouseenter',()=>{
        gsap.to(cursor,{scale : 1,opacity :1})
    })

    innerContent.addEventListener('mouseleave',()=>{
        gsap.to(cursor,{scale:0,opacity:0})
    })
}

function loco(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth : true
    })

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('.main',{
        scrollTop(value){
            return arguments.length ? locoScroll.scrollTo(value,0,0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect(){
            return {top:0, left:0, width: window.innerWidth, height: window.innerHeight};
        },

        pinType: document.querySelector('.main').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh",() => locoScroll.update());
    ScrollTrigger.refresh();
}

function page2TopAnim(){
    gsap.from('.first-text h3, .second-text h3',{
        y: 60,
        scrollTrigger:{
            scroller:'.main',
            trigger : '.first-text h3, .second-text h3',
            start:'top 100%',
            end : 'top 98%',
            duration:0.8,
            scrub:1,
            //markers:1
        }
    })

    gsap.to('.page2-top-border',{
        width : 94+'vw',
        scrollTrigger :{
            scroller : '.main',
            trigger : '.page2-top-border',
            start : 'top 92%',
            end : 'top 89%',
            duration: 5,
            scrub : 1
        }
    })

    gsap.from('.page2 .page2-bottom .btm-text h2 .up span',{
        y : 200,
        scrollTrigger:{
            scroller:'.main',
            trigger : '.page2 .page2-bottom .btm-text h2 .up span',
            start : 'top 103%',
            end : 'top 98%',
            scrub :2,
            stagger : 0.1
        }
    })
}

function page5TopAnim(){
    gsap.from('.page5-top .top-text h3',{
        y:60,
        scrollTrigger:{
            scroller:'.main',
            trigger : '.page5-top .top-text h3',
            start: 'top 100%',
            end : 'top 98%',
            duration : 0.8,
            scrub : 1
        }
    })

    gsap.to('.page5-top-border',{
        width : 94+'vw',
        scrollTrigger :{
            scroller : '.main',
            trigger : '.page5-top-border',
            start : 'top 92%',
            end : 'top 89%',
            duration: 5,
            scrub : 1
        }
    })

    gsap.from('.page5 .page5-bottom .btm-text h2 .up span',{
        y:200,
        scrollTrigger:{
            scroller:'.main',
            trigger : '.page5 .page5-bottom .btm-text h2 .up span',
            start : 'top 105%',
            end : 'top 99%',
            scrub :2,
            stagger : 0.1,
            //markers:true
        }
    })
}

function page6Anim(){
    const cursor = document.querySelector('.page6 .crsr');
    const svg = document.querySelector('.page6');

    svg.addEventListener('mousemove', (e)=>{
        gsap.to(cursor,{ x:e.x-50+'px', y:e.y-100+'px'})
    })

    svg.addEventListener('mouseenter',()=>{
        gsap.to(cursor,{scale : 1,opacity :1})
    })

    svg.addEventListener('mouseleave',()=>{
        gsap.to(cursor,{scale:0,opacity:0})
    })
}

function menuAnim(){
    const menuBtn = document.querySelector('.page1 .inner-content nav #menu')
    const menu = document.querySelector('.page1 .menu')
    const closeBtn = document.querySelector('.page1 .menu .menu-header #close')
    const video = document.querySelector('.page1 .menu .menu-sec .vid video')
    const playReel = document.querySelector('.page1 .menu .menu-sec .vid .play')
    const smallLinks = document.querySelector('.page1 .menu .small-links')
    const links = document.querySelectorAll('.page1 .menu .menu-sec .links h3 , .page1 .menu .menu-sec .links button')
    const border = document.querySelector('.page1 .menu .menu-border')

    menuBtn.addEventListener('click',()=>{
        menu.classList.add('active')
        menu.style.transition = 'height .5s ease'

        gsap.from(video,{scale:.1, duration :1})
        gsap.from(playReel,{ y:-100, duration :1.1})
        gsap.from(smallLinks,{ x:200, delay:-.4, duration :2})
        gsap.from(links,{ y:100, duration : .7, stagger:.1})
        gsap.to(border,{ width:95+ 'vw', duration: 1.5, delay:-.1})

    })
    closeBtn.addEventListener('click',()=>{
        menu.classList.remove('active')
    })
}


window.onload = function(){
    crsrAnim();
    loco();
    page2TopAnim();
    page5TopAnim();
    page6Anim();
    loader();
    menuAnim();
};