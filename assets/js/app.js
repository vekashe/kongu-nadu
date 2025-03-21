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