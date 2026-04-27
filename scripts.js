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

// --- Contact Form Validation ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the page from refreshing

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let isValid = true;

        // Basic Validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before requesting an invite.");
            isValid = false;
        } else if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Success Message
        if (isValid) {
            alert(`Thank you, ${name}! Your request has been sent.`);
            contactForm.reset(); // Clears the form
        }
    });
}

// --- Blog Search Functionality ---
const blogSearch = document.getElementById('blogSearch');
const blogCards = document.querySelectorAll('.blog-card');

if (blogSearch) {
    blogSearch.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        blogCards.forEach((card) => {
            const title = card.querySelector('.blog-card__title').innerText.toLowerCase();
            
            if (title.includes(searchString)) {
                card.style.display = 'block'; // Show if it matches
            } else {
                card.style.display = 'none';  // Hide if it doesn't match
            }
        });
    });
}
