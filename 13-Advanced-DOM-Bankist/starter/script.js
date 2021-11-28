'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button => button.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//==========================================
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('btn'));

//
// document.getElementById('section--1').insertAdjacentHTML('')
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookie, jk this is a sample message! <button class="btn btn--close-cookie">Got it!</button>';
const headerEl = document.querySelector('.header');
// headerEl.prepend(message);
headerEl.append(message); // override previous line;
// headerEl.before(message);
// headerEl.after(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

btnScrollTo.addEventListener('click', function (e) {
  //scroll the old way
  // const s1coords = section1.getBoundingClientRect();
  //  window.scrollTo(0, 800); //window.pageXOffset window.pageYOffset
  // console.log(
  //   `Sum: ${s1coords.top} + ${window.scrollY} = ${
  //     s1coords.top + window.scrollY
  //   }`
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

//
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  // alert('Got you!');
  h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//=====================
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const btnClicked = e.target.closest('.operations__tab');
  if (!btnClicked) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  btnClicked.classList.add('operations__tab--active');

  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${btnClicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//=============================
const nav = document.querySelector('.nav');

const handOver = function (e, opacity) {
  if (!e.target.classList.contains('nav__link')) return;

  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');

  siblings.forEach(el => {
    if (el !== link) el.style.opacity = opacity;
  });

  logo.style.opacity = opacity;
};

nav.addEventListener('mouseover', e => handOver(e, 0.5));
nav.addEventListener('mouseout', e => handOver(e, 1));

//===========================
// Old way
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
//===========================
const obsCallback = function (entries, observer) {
  const [e] = entries;
  if (e.isIntersecting) nav.classList.remove('sticky');
  else nav.classList.add('sticky');
};
const navHeight = nav.getBoundingClientRect().height;
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
const navObserver = new IntersectionObserver(obsCallback, obsOptions);
navObserver.observe(document.querySelector('.header'));

// Reveal Sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const section = entry.target;
  section.classList.remove('section--hidden');
  sectionObserver.unobserve(section);
};

const revealOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealSection, revealOptions);
allSections.forEach(sec => {
  sectionObserver.observe(sec);
  // sec.classList.add('section--hidden');
});

//lazy load image
const images = document.querySelectorAll('img[data-src]');

const loadImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  const imageTag = entry.target;

  imageTag.src = imageTag.dataset.src;
  imageTag.addEventListener('load', function (e) {
    imageTag.classList.remove('lazy-img');
  });
  observer.unobserve(imageTag);
};

const loadImageOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '+200px',
};

const lazyImageObserver = new IntersectionObserver(loadImage, loadImageOptions);
images.forEach(image => lazyImageObserver.observe(image));

//slider=================================================
const slides = document.querySelectorAll('.slide');
const slideBtnLeft = document.querySelector('.slider__btn--left');
const slideBtnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;

const createDots = function () {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>"`
    );
  });
};
createDots();

dotsContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('dots__dot')) return;

  currentSlide = e.target.dataset.slide;
  updateSlide();
});

const updateSlide = function () {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });

  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${currentSlide}"]`)
    .classList.add('dots__dot--active');
};
updateSlide();

const rightSlide = function (e) {
  if (currentSlide++ === 2) currentSlide = 0;
  updateSlide();
};

const leftSlide = function (e) {
  if (currentSlide-- === 0) currentSlide = 2;
  updateSlide();
};

slideBtnRight.addEventListener('click', rightSlide);
slideBtnLeft.addEventListener('click', leftSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') leftSlide();
  if (e.key === 'ArrowRight') rightSlide();
});
