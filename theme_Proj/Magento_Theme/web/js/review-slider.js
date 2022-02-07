define(["jquery"], function ($) {
  "use strict";

  return function () {
    const slidesLength = $(".review__slide").length;

    getDotsHtml(slidesLength);
    initSlider();
  };

  function getDotsHtml(slidesLength) {
    let html = "";
    for (let i = 0; i < slidesLength; i++) {
      html += `<span class="review__dot ${i === 0 ? "active" : ""}" data-slide='${i}'></span>`;
    }
    $(".review__control").append(html);
  }

  function initSlider() {
    const slides = document.querySelector(".review__slides");

    document.querySelector(".review__control").addEventListener("click", (e) => {
        const t = e.target.closest('.review__dot')
      if(!t) return;

      let w = document.querySelector(".review__slide").offsetWidth;
      document.querySelector('.review__dot.active').classList.remove('active')
      t.classList.add('active');
        const ind = +t.dataset.slide
      slides.scrollLeft = ind * w;
      
    });
  }
});
