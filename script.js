var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 1,
        pin: true,
        markers: true,
    }
})

tl
.to("#circle #btm img", {
    rotate: "-180deg",
    scale: .6,
    stagger: .1,
    ease: Power1
}, "same")
.to("#circle #top img", {
    scale: .6,
    ease: Power1
}, "same")
.to("#home #gallery", {
    bottom: "-100%",
    ease: Power1
}, "same")
.to("#cimage img", {
    scale: 0,
    ease: Power1
}, "same")
.to("#centerimg h5", {
    opacity: 0,
    ease: Power1
}, "same")
.to("#circp", {
    top: "50%",
    scale: 2,
    ease: Power1
}, "same")