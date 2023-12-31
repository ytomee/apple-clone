var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    speed: 1300,
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 0,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });