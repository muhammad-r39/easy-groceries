// Hero Carousel
const hero = new Swiper(".hero", {
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: false,
  },

  scrollbar: {
    el: ".hero .swiper-scrollbar",
  },
  pagination: {
    el: ".hero .swiper-pagination",
    clickable: true,
  },
});

// Category List Carousel
const categoryList = new Swiper("#sectionCategory .category-list", {
  spaceBetween: 20,
  slidesPerView: 2,
  speed: 800,
  loop: true,
  navigation: {
    nextEl: "#sectionCategory .next",
    prevEl: "#sectionCategory .prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
/* End Category List Carousel */

// Specials List Carousel
const specialsList = new Swiper(".specials", {
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: "#sectionSpecials .next",
    prevEl: "#sectionSpecials .prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
/* End Specials List Carousel */

// months-best Carousel
const monthsBest = new Swiper(".months-best", {
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
/* End months-best Carousel */

// Department Detail Carousel
const sectionDepartment = new Swiper(".department-detail", {
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 1000,
  grid: {
    rows: 2,
    fill: "row",
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: "#sectionDepartment .next",
    prevEl: "#sectionDepartment .prev",
  },
});
/* End Department Detail Carousel */

// months-best Carousel
const relatedItems = new Swiper("#sectionRelatedItems .related-items", {
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
/* End months-best Carousel */
