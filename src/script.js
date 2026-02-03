lucide.createIcons();
// Make sure lucide icons are created first
if (window.lucide) {
  lucide.createIcons();
}

// Elements
const allToolsBtn = document.getElementById('all-tools-btn');
const megaMenu = document.getElementById('mega-menu');

// Toggle function for keyboard & mobile support
function setMenuOpen(isOpen) {
  if (!megaMenu || !allToolsBtn) return;
  if (isOpen) {
    megaMenu.classList.add('open');
    megaMenu.setAttribute('aria-hidden', 'false');
    allToolsBtn.setAttribute('aria-expanded', 'true');
  } else {
    megaMenu.classList.remove('open');
    megaMenu.setAttribute('aria-hidden', 'true');
    allToolsBtn.setAttribute('aria-expanded', 'false');
  }
}

// Click toggling (useful for touch devices / smaller screens)
allToolsBtn && allToolsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const isOpen = megaMenu.classList.contains('open');
  setMenuOpen(!isOpen);
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!megaMenu || !allToolsBtn) return;
  if (!megaMenu.contains(e.target) && !allToolsBtn.contains(e.target)) {
    setMenuOpen(false);
  }
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    setMenuOpen(false);
    allToolsBtn && allToolsBtn.focus();
  }
});

// Optional: close menu when a menu link is clicked (improves UX)
megaMenu && megaMenu.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link) setMenuOpen(false);
});


    // Search button action
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", () => {
        console.log("Search clicked");
        alert("Search feature coming soon 🚀");
    });

    // Free trial CTA click
    const trialBtn = document.getElementById("trialBtn");
    trialBtn.addEventListener("click", () => {
        console.log("Start Free Trial clicked");
        trialBtn.innerText = "Redirecting...";
        setTimeout(() => {
            trialBtn.innerText = "Start Free Trial";
        }, 1000);
    });


    // Example: log when hero is visible
    document.addEventListener("DOMContentLoaded", () => {
        const hero = document.querySelector(".hero-section");
        if (hero) {
            console.log("Hero section loaded 🚀");
        }
    });
