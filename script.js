

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    });
    gsap.from(".img-portada", {
        opacity: 0, 
        y: -100, 
        duration: 2
      });

    
    function toGallery() {
        gsap.to(window, { duration: 2, scrollTo: "#banner" });
    }
      
    document.querySelector("#toGallery").addEventListener("click", toGallery);
});