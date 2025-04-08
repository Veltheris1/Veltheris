// ========== RANDOM SLIDE-IN FOR SPEECH BOXES ==========

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".speech-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1, // trigger when 10% of box is in view
    }
  );

  boxes.forEach((box) => observer.observe(box));
});

// ========== MENU ICON FUNCTIONALITY ==========

const menuIcon = document.getElementById("menu-icon");
const slideMenu = document.getElementById("slide-menu");

menuIcon.addEventListener("click", () => {
  slideMenu.classList.toggle("active");
});

const closeMenu = document.getElementById("close-menu");

closeMenu.addEventListener("click", () => {
  slideMenu.classList.remove("active");
});

// ========== TOGGLE SEARCH BAR IN NAVBAR ==========

const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("show");

  if (searchBar.classList.contains("show")) {
    searchIcon.classList.remove("fa-magnifying-glass");
    searchIcon.classList.add("fa-xmark");
  } else {
    searchIcon.classList.remove("fa-xmark");
    searchIcon.classList.add("fa-magnifying-glass");
  }
});

// ========== SUBMENU TOGGLING ==========

const mainLinks = document.querySelectorAll('.menu-item .main-link');

mainLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const parentItem = link.parentElement;
    parentItem.classList.toggle('active');

    mainLinks.forEach(otherLink => {
      const otherParent = otherLink.parentElement;
      if (otherParent !== parentItem && otherParent.classList.contains('active')) {
        otherParent.classList.remove('active');
      }
    });
  });
});

// ========== ✨ DYNAMIC STAR GENERATION ✨ ==========

const starsContainer = document.getElementById('stars-container');
const STAR_COUNT = 40;

function createStar(i) {
  setTimeout(() => {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    const delay = Math.random() * 3;
    star.style.animationDelay = `${delay}s`;

    const scale = Math.random() * 0.6 + 0.4;
    star.style.transform = `scale(${scale})`;

    const vertical = document.createElement('span');
    vertical.classList.add('star-line', 'vertical');

    const horizontal = document.createElement('span');
    horizontal.classList.add('star-line', 'horizontal');

    star.appendChild(vertical);
    star.appendChild(horizontal);
    starsContainer.appendChild(star);
  }, i * 150);
}

for (let i = 0; i < STAR_COUNT; i++) {
  createStar(i);
}

