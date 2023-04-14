const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween:25,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        920:{
            slidesPerView: 3,
        },
    },
  });
