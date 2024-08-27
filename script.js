//nav blur
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > window.innerHeight) {
    navbar.classList.add('glassmorphism');
  } else {
    navbar.classList.remove('glassmorphism');
  }
});

function countdown(element) {
  const targetDate = element.getAttribute('data-target');
  const target = new Date(targetDate).getTime();

  const hariEl = element.querySelector('.hari div');
  const jamEl = element.querySelector('.jam div');
  const menitEl = element.querySelector('.menit div');
  const detikEl = element.querySelector('.detik div');

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = target - now;

    if (distance < 0) {
      clearInterval(interval);
      console.log('abis ygy');
      return;
    }

    const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
    const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((distance % (1000 * 60)) / 1000);

    hariEl.textContent = hari;
    jamEl.textContent = jam;
    menitEl.textContent = menit;
    detikEl.textContent = detik;
  }, 1000);
}
document.querySelectorAll('.countdownTimer').forEach(countdown);

let slideSkarang = 0;

function lihatSlide(index) {
  const slide = document.querySelectorAll('.slide');
  const totalSlides = slide.length;

  if (index >= totalSlides) {
    slideSkarang = 0;
  } else if (index < 0) {
    slideSkarang = totalSlides - 1;
  } else {
    slideSkarang = index;
  }

  const carouselSlides = document.getElementById('slides');
  carouselSlides.style.transform = `translateX(-${slideSkarang * 100}%)`;
}

function nextSlide() {
  lihatSlide(slideSkarang + 1);
}

function prevSlide() {
  lihatSlide(slideSkarang - 1);
}
