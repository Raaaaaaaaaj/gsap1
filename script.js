var tl = gsap.timeline();

function time(){
    var a = 0;
    setInterval(function(){
        a =  a+Math.floor(Math.random()*20);
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
        else{
            a = 100    
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
        
    },200)
}
time()

tl.to("#loader h1",{
    scale:1.3,
    delay:2,
    duration:1,
})

tl.to("#loader",{
    top:"-100vh",
    delay:.5,
    duration:1.2,
    scrub:5
})

tl.to("#page-1 h1",{
    transform:"translateX(-85%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page-1",
        scroller:"body",
        //markers:true,
        start:"top 0",
        scrub:2,
        pin:true
    }
})
tl.to("#page-2 img",{
    x:500,
    delay:5,
    duration:2,
    scrollTrigger:{
        trigger:"#page-2 img",
        scroller:"body",
        scrub:2,
    }
})
tl.to("#page-3 img",{
    x:-500,
    delay:5,
    duration:2,
    scrollTrigger:{
        trigger:"#page-3 img",
        scroller:"body",
        scrub:2,
    }
})
tl.from(".Navbar, #nav-1, #nav-1 a, #nav-2, #nav-2 a, #nav-3, #nav-3 button",{
    y:-100,
    delay:0,
    duration:2,
    stagger:0.1,
})
