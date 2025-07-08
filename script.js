
// Typing effect
const texts = ["Mahasiswa INFORMATIKA", "Hobby Menggambar", "Developer WEB", "Web disain"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('typing-text').textContent = letter;
  if (letter.length === currentText.length) {
    setTimeout(() => {
      erase();
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
}

function erase() {
  letter = currentText.slice(0, --index);
  document.getElementById('typing-text').textContent = letter;
  if (letter.length === 0) {
    count++;
    index = 0;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 50);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  type();
  // Toggle Dark / Light Mode
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// Cek mode sebelumnya dari localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
}

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.toggle("light");

  // Simpan pilihan ke localStorage
  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
// Scroll Reveal Animation
const scrollElements = document.querySelectorAll('.scroll-reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

scrollElements.forEach(el => observer.observe(el));
AOS.init({
  duration: 1000,
  once: true
});

  
});
