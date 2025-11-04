// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest('.nav-item').classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Banner Slider
  // ----------------------------------------
  new Swiper(".banner-slider", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: "fade",
    crossFade: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  async function handleContact(event) {
    let response;
    event.preventDefault();
    document.getElementById("contactForm-error").classList.add('hidden')
    const formData = Object.fromEntries(new FormData(event.target).entries())

    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      document.getElementById("contactForm-error").classList.remove('hidden')
    }

    if (response?.ok) {
      window.location = '/thank-you';
    } else {
      document.getElementById("contactForm-error").classList.remove('hidden')
    }
  }

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", handleContact);
})();
