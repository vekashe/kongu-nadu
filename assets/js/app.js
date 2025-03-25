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

window.addEventListener('scroll', ()=> {
    setTimeout(()=> {
        scrollActiveEle();
    }, 500)
})

var swiper = new Swiper(".heroSwiper", {
    slidesPerView: 1,
    effect: 'fade',
    speed: 1000,
    autoplay: true,
    loop: true,
    disableOnInteraction: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".homeTesti", {
    slidesPerView: 1,
    speed: 1000,
    autoplay: true,
    loop: true,
    disableOnInteraction: false,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
});

function menuSwitch(numIndex) {
    const buttonCount = document.querySelectorAll('.home-menu-btn button');
    const contentCount = document.querySelectorAll('.home-menu-tab');
    for(let i = 0; i < buttonCount.length; i++) {
        if(i == numIndex) {
            contentCount[i].classList.toggle('active');
            setTimeout(()=> {
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






/* Store the element in el */
let el = document.querySelector('.home-menu-lft')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = -10 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = 10 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
})













gsap.registerPlugin(ScrollTrigger);

gsap.to('.home-video-card', {
  scrollTrigger: {
    trigger: ".home-video",
    start: "top bottom",
    end: "center 100px",
    scrub: 1.5, // Smoothly scrubs between the start and end values
  },
  transform: 'scale(1)',
});

gsap.to('.heroSwiper', {
  scrollTrigger: {
    trigger: ".home-about",
    start: "top bottom",
    end: "center 100px",
    scrub: 1.5, // Smoothly scrubs between the start and end values
  },
  y: 300,
});

gsap.to('.home-menu-ryt', {
  scrollTrigger: {
    trigger: ".home-menu",
    start: "top bottom",
    end: "center center",
    scrub: 1.5, // Smoothly scrubs between the start and end values
  },
  x: 0,
});

// gsap.to('.home-about-ryt-img1', {
//   scrollTrigger: {
//     start: "top bpttom",
//     end: "top 100px",
//     scrub: 1.8, // Smoothly scrubs between the start and end values
//   },
//   transform: "rotate(-15deg) translateX(0)",
// });