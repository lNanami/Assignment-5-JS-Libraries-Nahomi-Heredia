// Initialize Glide.js
new Glide('.glide', {
  type: 'carousel',
  autoplay: 3000,
  hoverpause: true,
  perView: 1,
}).mount();

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Initialize Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});

// Initialize Typed.js
new Typed('#typed', {
  strings: ['Travel. Discover. Explore.', 'Find your next adventure.', 'Let’s go beyond...'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});