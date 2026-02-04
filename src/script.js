// Initialize icons if lucide is present
if (window.lucide) {
  lucide.createIcons();
}

// Run main initialization after DOM ready
document.addEventListener('DOMContentLoaded', () => {
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
  if (allToolsBtn && megaMenu) {
    allToolsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = megaMenu.classList.contains('open');
      setMenuOpen(!isOpen);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!megaMenu.contains(e.target) && !allToolsBtn.contains(e.target)) {
        setMenuOpen(false);
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        allToolsBtn.focus();
      }
    });

    // Close menu when a menu link is clicked (improves UX)
    megaMenu.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link) setMenuOpen(false);
    });
  }

  // Search button action
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      console.log('Search clicked');
      alert('Search feature coming soon');
    });
  }

  // Free trial CTA click
  const trialBtn = document.getElementById('trialBtn');
  if (trialBtn) {
    trialBtn.addEventListener('click', () => {
      console.log('Start Free Trial clicked');
      trialBtn.innerText = 'Redirecting...';
      setTimeout(() => {
        trialBtn.innerText = 'Start Free Trial';
      }, 1000);
    });
  }

  // Example logs for key sections
  const hero = document.querySelector('.hero-section');
  if (hero) console.log('Hero section loaded');

  const footer = document.querySelector('.footer');
  if (footer) console.log('Footer section loaded 📄');

  const trustSection = document.querySelector('.trust-section');
  if (trustSection) console.log('Trust section loaded 🔐');

  // Filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  const toolCards = document.querySelectorAll('.tool-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Get filter value
      const filterValue = button.getAttribute('data-filter');
      console.log('Selected Filter:', filterValue);

      // Show/hide cards by category
      toolCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const shouldShow = filterValue === 'all' || category === filterValue;
        card.classList.toggle('hidden', !shouldShow);
      });
    });
  });

  // Optional click feedback
  toolCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const h3 = card.querySelector('h3');
      const toolName = h3 ? h3.innerText : 'tool';
      console.log(`Navigating to ${toolName}...`);
      card.style.transform = 'scale(0.98)';
      setTimeout(() => {
        card.style.transform = '';
      }, 150);
    });
  });
});
