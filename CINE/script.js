gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

gsap.re
gsap.matchMedia().add(
    {
    isMobile: "(max-width: 767px)",
    isDesktop: "(min-width: 768px)",
    },
    (contex) => {
        const { isMobile} = contex.conditions;
        const startVh = isMobile ? 10 : 40;
        const heroMaxVh = isMobile ? 400: 300;
        const vh = () => window.innerHeight;

        gsap.set("body", { paddingBottom:  `${heroMaxVh -100}vh`  });

        gsap.fromTo(
            ".video",
            {width: "40%"},
            {
                width: "100%",
                ease: "none",
                ScrollTrigger: {start: 0, end: () => vh() * 1.0, scrub: true },
            }
        );

        gsap.fromTo(
            ".video",
            {height:`${satartVh}vh` =>},
            {
                height: "100vh",
                ease: "none",
                ScrollTrigger: { start: 0, end: () => vh () * 0.8, scrub: true},
            }
        
        );

        gsap.fromTo(
            ".hero",
            {height: "100vh" },
            {
                height:`${heroMaxVh}vh`,
                ScrollTrigger: { start: 0, end: () => vh () * 2.0, scrub: true},
            }          
        );

        gsap.to ("body", {
            paddingBottom: 0,
            ease: "none",
            ScrollTrigger: { start: 0, end: () => vh()  }

        },
        );

    },
);

gsap.from(".video" , {
    autoAlpha: 0,
    scale: 0.85,
    duration: 1.4,
    ease: "power3.out",

});

document.fonts.ready.then(() => {
    const split = SplitText.create( "h1", { type: "chars"});
    gsap.from(split.chars, {
        y: 20,
        autoAlpha: 0,
        rotation: -20,
        stagger: { amount: 0.6, from: "start"},
    })});