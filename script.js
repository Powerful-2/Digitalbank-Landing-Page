// --- Selector Setup ---
const btn = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const firstLink = menu ? menu.querySelector('a') : null;

// --- Mobile Menu Toggle Logic ---
if (btn && menu) {
    btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        
        btn.setAttribute('aria-expanded', !isExpanded);
        btn.classList.toggle('open');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        if (!isExpanded) {
            setTimeout(() => firstLink && firstLink.focus(), 100);
        } else {
            btn.focus();
        }
    });
}

// --- Request Invite Header Button Logic ---
const inviteBtn = document.getElementById('inviteBtn');
if (inviteBtn) {
    inviteBtn.addEventListener('click', () => {
        console.log('Invite button clicked!');
    });
}

// --- Contact Form Validation & EmailJS Submission ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stops the page from reloading and appending queries to the URL

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let isValid = true;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before requesting an invite.");
            isValid = false;
        } else if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // If inputs are secure, send via EmailJS
        if (isValid) {
            emailjs.sendForm('service_7utn1ra', 'template_u7mgmcm', this)
                .then(function() {
                    alert(`Thank you, ${name}! Your request has been sent via EmailJS.`);
                    contactForm.reset();
                }, function(error) {
                    alert('Failed to send the request. Please check your console.');
                    console.log('EmailJS Error:', error);
                });
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
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
