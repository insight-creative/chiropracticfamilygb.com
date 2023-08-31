console.log('%c Crafted by Insight Creative, Inc. Designed by Sam Rowe and Developed by Chue Vang', 'background: #1d1d1d; color: white; padding: 5px 10px;')

const mobileMenu = document.querySelector('.header__mobile-nav');
const hamburger = document.querySelector('.hamburger');
const siteHeader = document.querySelector(".header");
const hasSubMenu = document.querySelectorAll(".has-sub-menu");
const scrollTop = () => window.scrollY;

const scrollDetect = (collapse, expand) => {
  const currentScroll = scrollTop();
  if (currentScroll > scrollState) {
    collapse();
  } else {
    expand();
  }
  scrollState = scrollTop();
};

function toggleMobileDropdowns() {
  mobileMenu.addEventListener('click', (event) => {
    const dropdownToggle = event.target.closest('.toggle-mobile-dropdown');

    // If the clicked element is not a dropdown toggle, exit early
    if (!dropdownToggle) {
      return;
    }

    const dropdown = dropdownToggle.parentElement;

    if (dropdown.classList.contains('mobile-dropdown-open')) {
      dropdown.setAttribute('aria-expanded', 'false');
      dropdown.setAttribute('aria-label', 'open mobile dropdown menu');
      mobileMenu.classList.remove('has-dropdown-open');
      dropdown.classList.remove('mobile-dropdown-open');
    } else {
      mobileMenu.classList.add('has-dropdown-open');
      dropdown.classList.add('mobile-dropdown-open');
      dropdown.setAttribute('aria-expanded', 'true');
      dropdown.setAttribute('aria-label', 'close mobile dropdown menu');
    }
  });
}

toggleMobileDropdowns();

hamburger.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  if (mobileMenu.classList.contains('nav-open')) {
    this.setAttribute('aria-expanded', 'false');
    this.setAttribute('aria-label', 'open mobile menu');
    mobileMenu.classList.remove('nav-open');
    hamburger.classList.remove('is-active');
  } else {
    mobileMenu.classList.add('nav-open');
    hamburger.classList.add('is-active');
    this.setAttribute('aria-expanded', 'true');
    this.setAttribute('aria-label', 'close mobile menu');
  }
}

let scrollState = 0;

function collapseNav() {
  siteHeader.classList.remove("expand");
  siteHeader.classList.add("collapse");
}

function expandNav() {
  siteHeader.classList.remove("collapse");
  siteHeader.classList.add("expand");
}

let ticking = false;

// window.addEventListener("scroll", () => {
//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       scrollDetect(collapseNav, expandNav);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });

function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollDetect(collapseNav, expandNav);
      ticking = false;
    });

    ticking = true;
  }
}

window.addEventListener("scroll", handleScroll);