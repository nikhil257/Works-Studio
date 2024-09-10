var tl = gsap.timeline();

tl.to("#yellow",{
    top : "-100%",
    delay : 0.1,
    duration : 0.5,
    ease: "expo.out",
})
tl.to("#loader video",{
    top : "-100%",
    delay : 0.1,
    duration : 0.5,
    opacity : 0,
    ease: "expo.out",
})
tl.to("#loader",{
   display : "none",
   duration:0.1
})
