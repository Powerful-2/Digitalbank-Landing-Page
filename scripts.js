const btn = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const firstLink = menu.querySelector('a');

// Mobile Menu Toggle Logic
if (btn && menu) {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    
    // 1. Toggle the ARIA state
    btn.setAttribute('aria-expanded', !isExpanded);
    
    // 2. Toggle the classes
    menu.classList.toggle('active');
    overlay.classList.toggle('active');

    // 3. Focus Management
    if (!isExpanded) {
      // Small delay to ensure menu is visible before focusing
      setTimeout(() => firstLink && firstLink.focus(), 100); 
    } else {
      btn.focus(); 
    }
  });
}

const toggleBtn = document.querySelector('.dropdown-toggle');
const navMenu = document.querySelector('#mobile-menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  // Logic to show/hide your nav menu
  navMenu.classList.toggle('show'); 
});

// Request Invite Button Logic
const inviteBtn = document.getElementById('inviteBtn');
if (inviteBtn) {
  inviteBtn.addEventListener('click', () => {
    console.log('Invite button clicked!');
    // You can add an alert or modal logic here later
  });
}
