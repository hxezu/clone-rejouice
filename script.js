function loader(){
    var tl = gsap.timeline()
    tl.from(".loader span",{
        x:100,
        duration : 1.2,
        stagger : .03,
        delay :.1
    })
    tl.to('.loader span',{
        x:-100,
        duration:.6,
        opacity:0,
        stagger:.03
    })
    tl.to('.loader',{
        duration :0.5,
        opacity: 0,
        display : 'none'
    })
    tl.from('.page1 .inner-content h1 span',{
        y:60,
        duration :.5,
        delay:-.3,
        stagger :.05
    })
}

function crsrAnim(){
    const cursor = document.querySelector('.cursor');
    const innerContent = document.querySelector('.inner-content');

    innerContent.addEventListener('mousemove', (e)=>{
        gsap.to(cursor,{
            x:e.x+'px',
            y:e.y+'px'
        })
    })

    innerContent.addEventListener('mouseenter',()=>{
        gsap.to(cursor,{
            scale : 1,
            opacity :1
        })
    })

    innerContent.addEventListener('mouseleave',()=>{
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
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

        gsap.from(video,{
            scale:.1,
            duration :1
        })
        gsap.from(playReel,{
            y:-100,
            duration :1.1
        })
        gsap.from(smallLinks,{
            x:200,
            delay:-.4,
            duration :2
        })
        gsap.from(links,{
            y:100,
            duration : .7,
            stagger:.1
        })
        gsap.to(border,{
            width:95+ 'vw',
            duration: 1.5,
            delay:-.1
        })

    })
    closeBtn.addEventListener('click',()=>{
        menu.classList.remove('active')
    })
}




crsrAnim();
loco();
loader();
menuAnim();