const lenis = new Lenis({
  duration: 1.5, // Duration for smooth scroll
  smoothWheel: true, // Enable smooth wheel scrolling
  smoothTouch: true, // Enable smooth touch scrolling (for mobile)
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function scrollActiveEle() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
}

window.addEventListener('scroll', () => {
  scrollActiveEle();
});

window.addEventListener('load', ()=> {
  document.querySelector('.preloader').style.display = "none";
})

function menuSwitch(numIndex) {
  const buttonCount = document.querySelectorAll('.home-menu-btn button');
  const contentCount = document.querySelectorAll('.home-menu-tab');
  for (let i = 0; i < buttonCount.length; i++) {
    if (i == numIndex) {
      contentCount[i].classList.toggle('active');
      setTimeout(() => {
        contentCount[i].classList.toggle('fade');
      },)
      buttonCount[i].classList.toggle('active');
    }
    else {
      contentCount[i].classList.remove('active');
      contentCount[i].classList.remove('fade');
      buttonCount[i].classList.remove('active');
    }
  }
}



function menuDrop(num) {
  const allDrop = document.querySelectorAll('.menu-list-set');
  for(let i = 0; i < allDrop.length; i++) {
    allDrop[i].classList.remove('active');
  }
  allDrop[num].classList.add('active');
}





gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".home-hero").forEach(slider => {
  // Pin each slider section
  ScrollTrigger.create({
    trigger: slider,
    start: "top top",
    end: "+=100%",
    pinSpacing: false,
    pin: true
  });

  // Animate clip-path per slide
  gsap.to(slider.querySelector("h2"), {
    clipPath: "inset(0% 0% 0% 0%)",
    scrollTrigger: {
      trigger: slider,
      start: "top center", // Start animation when the slide reaches the center
      end: "center bottom", // End animation when it leaves the center
      scrub: true,
    }
  });

  gsap.to(slider.querySelector("p"), {
    clipPath: "inset(0% 0% 0% 0%)",
    scrollTrigger: {
      trigger: slider,
      start: "top center", // Start animation when the slide reaches the center
      end: "bottom bottom", // End animation when it leaves the center
      scrub: true,
    }
  });
});

gsap.to('.home-video-card', {
  scrollTrigger: {
    trigger: ".home-video",
    start: "top center",
    end: "+=60%",
    scrub: 1.2,
  },
  clipPath: "inset(0% 0% 0% 0%)",
});

gsap.to('.home-menu-lft-img img', {
  scrollTrigger: {
    trigger: ".home-menu",
    start: "top center",
    end: "+=30%",
    scrub: 1.2, // Smoothly scrubs between the start and end values
  },
  clipPath: "inset(0% 0% 0% 0%)",
});

gsap.to('.home-menu-ryt', {
  scrollTrigger: {
    trigger: ".home-menu",
    start: "top bottom",
    end: "center center",
    scrub: 1.2, // Smoothly scrubs between the start and end values
  },
  x: 0,
});

gsap.to('.home-gallery-img3', {
  scrollTrigger: {
    trigger: ".home-gallery",
    start: "top +=20%",
    end: "+=100%",
    scrub: 1.2, // Smoothly scrubs between the start and end values
  },
  width: '10%',
});

gsap.to('.home-gallery-img2', {
  scrollTrigger: {
    trigger: ".home-gallery",
    start: "top +=20%",
    end: "+=100%",
    scrub: 1.2, // Smoothly scrubs between the start and end values
  },
  width: '20%',
});

gsap.to('.home-gallery-img1', {
  scrollTrigger: {
    trigger: ".home-gallery",
    start: "top +=20%",
    end: "+=100%",
    scrub: 1.2, // Smoothly scrubs between the start and end values
  },
  width: '100%',
});

gsap.to('.home-direction-ryt', {
  scrollTrigger: {
    trigger: ".home-direction",
    start: "top +=80%",
    end: "bottom bottom",
    scrub: 1.8, // Smoothly scrubs between the start and end values
  },
  transform: "translateY(0px)",
});

gsap.to('.home-direction-iframe', {
  scrollTrigger: {
    trigger: ".home-direction",
    start: "top +=70%",
    end: "bottom bottom",
    scrub: 1.8, // Smoothly scrubs between the start and end values
  },
  clipPath: "inset(0% 0% 0% 0%)",
});

gsap.to('.about-res-lft', {
  scrollTrigger: {
    trigger: ".about-res",
    start: "top bottom",
    end: "bottom top",
    scrub: 1.1, // Smoothly scrubs between the start and end values
  },
  clipPath: "inset(0% 0% 0% 0%)",
  y: -60,
});

gsap.to('.about-res-thumb', {
  scrollTrigger: {
    trigger: ".about-res",
    start: "top bottom",
    end: "bottom top",
    scrub: 1.1, // Smoothly scrubs between the start and end values
  },
  clipPath: "inset(0% 0% 0% 0%)",
  y: 60,
});

gsap.to('.about-part-ryt-img:nth-child(1)', {
  scrollTrigger: {
    trigger: ".about-part",
    start: "top bottom",
    end: "top center",
    scrub: 1.3, // Smoothly scrubs between the start and end values
  },
  clipPath: "inset(0% 0% 0% 0%)",
});

gsap.to('.about-part-ryt-img:nth-child(2)', {
  scrollTrigger: {
    trigger: ".about-part",
    start: "top center",
    end: "+=60%",
    scrub: 1.3, // Smoothly scrubs between the start and end values
  },
  clipPath: "inset(0% 0% 0% 0%)",
});

gsap.to('.about-reg img', {
  scrollTrigger: {
    trigger: ".about-reg",
    start: "top bottom",
    end: "bottom top",
    scrub: 1.3, // Smoothly scrubs between the start and end values
  },
  scale: 1.1,
});


gsap.to('.about-goal-card:nth-child(1)', {
  scrollTrigger: {
    trigger: ".about-goal",
    start: "top bottom",
    end: "center center",
    scrub: 1.3, // Smoothly scrubs between the start and end values
  },
  clipPath: "inset(0% 0% 0% 0%)",
  transform: "translateX(0)",
});

gsap.to('.about-goal-card:nth-child(2)', {
  scrollTrigger: {
    trigger: ".about-goal",
    start: "top bottom",
    end: "center center",
    scrub: 1.3, // Smoothly scrubs between the start and end values
  },
  clipPath: "inset(0% 0% 0% 0%)",
  transform: "translateX(0)",
});

gsap.to('.order-online-lft img', {
  scrollTrigger: {
    trigger: ".order-online",
    start: "top center",
    end: "+=30%",
    scrub: 1.2, // Smoothly scrubs between the start and end values
  },
  clipPath: "inset(0% 0% 0% 0%)",
});

gsap.to('.order-online-set:nth-child(1)', {
  scrollTrigger: {
    trigger: ".order-online",
    start: "top bottom",
    end: "+=70%",
    scrub: 1.3, // Smoothly scrubs between the start and end values
  },
  transform: "translateX(0)",
});

gsap.to('.order-online-set:nth-child(2)', {
  scrollTrigger: {
    trigger: ".order-online",
    start: "top bottom",
    end: "+=90%",
    scrub: 1.3, // Smoothly scrubs between the start and end values
  },
  transform: "translateX(0)",
});






function scrollButtonDown() {
  const getHeight = document.querySelector('.home-menu-card');
  getHeight.scrollBy({
    top: getHeight.clientHeight, // Corrected
    behavior: "smooth",
  });
}

function scrollButtonUp() {
  const getHeight = document.querySelector('.home-menu-card');
  getHeight.scrollBy({
    top: -getHeight.clientHeight, // Corrected (negative value to scroll up)
    behavior: "smooth",
  });
}