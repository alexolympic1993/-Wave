/* Ещё подкасты */

const podcastsBtn = document.querySelector('.podcasts__btn');
const podcastsItem = document.querySelectorAll('.podcasts__item');

podcastsBtn.addEventListener('click', () => {
  podcastsItem.forEach(el => { el.classList.add('podcasts__item--visible') });
  podcastsBtn.closest('.podcasts__btn-wrapper').classList.add('podcasts__btn--hidden');


});


/* Бургер меню */

document.getElementById("burger").addEventListener("click", function () {
  document.querySelector("header").classList.toggle("header-open")
});


/* Что в эфире */

document.getElementById("ether").addEventListener("click", function () {
  document.querySelector("header").classList.toggle("header-ether-active")
});

/* селект */

const element = document.querySelector('.broadcasts__choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
});

/* Поиск */

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('header-form').classList.add('header-form--active')
  })

  document.getElementById('header-icon-close').addEventListener('click', (e) => {
    document.getElementById('header-form').classList.remove('header-form--active')
  })

  document.getElementById('header-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
});

/* аккордеон */

new Accordion('.accordion-container');


/* Аккордеон гости */

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-blogers-Olga').addEventListener('click', (e) => {
    document.getElementById('quests-form-olga').classList.add('quests-form--active')
  })

});

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-blogers-Oleg').addEventListener('click', (e) => {
    document.getElementById('quests-form-oleg').classList.add('quests-form--active')
  })

});

/* слайдер */

const swiper = new Swiper('.slider-about', {
  slidesPerView: 4,
  slidesPerGroup: 2,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
      loop: true
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      loop: true
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      loop: true
    },
      // when window width is >= 1025px
    1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        loop: true
    },
     // when window width is >= 1601px
     1601: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 30,
      loop: true
    },
  },
  // пагинация
  pagination: {
    el: '.swiper-pagination',
  },
  // навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Form

let validation = new JustValidate('#form')


validation.addField("#name", [
  {
    rule: 'required',
    errorMessage : 'Ошибка'
  },
  {
    value: /[a-z]/gi,
    rule: 'customRegexp',
    errorMessage : 'Ошибка'
  }
])
.addField("#email", [
  {
    rule: 'required',
    errorMessage : 'Введите почту'
  },
  {
    rule: 'email',
    errorMessage : 'Ошибка в формате почты'
  },
  
])













