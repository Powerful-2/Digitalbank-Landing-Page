/* ==========================================================================
   DIGITALBANK MAIN SCRIPT
   ========================================================================== */

/* ==========================================================================
   1. GLOBAL CONSTANTS
   ========================================================================== */

const EMAILJS_SERVICE_ID = "service_7utn1ra";
const EMAILJS_TEMPLATE_ID = "template_u7mgmcm";
const FOCUS_DELAY_MS = 100;

/* ==========================================================================
   2. EMAILJS INITIALIZATION
   ========================================================================== */

if (typeof emailjs !== "undefined") {
    emailjs.init("1HVZ07Q1CSvGstzW9"); // Replace with your EmailJS Public Key
    
}

/* ==========================================================================
   3. MOBILE MENU
   ========================================================================== */

const menuButton =
    document.querySelector(".dropdown-toggle") ||
    document.getElementById("dropdown-toggle");

const menuDrawer =
    document.querySelector(".mobile-menu") ||
    document.getElementById("mobile-menu");

const menuOverlay =
    document.querySelector(".overlay") ||
    document.getElementById("overlay");

const menuFirstLink = menuDrawer?.querySelector("a");

if (menuButton && menuDrawer && menuOverlay) {

    menuButton.addEventListener("click", () => {

        const isExpanded =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute("aria-expanded", String(!isExpanded));

        menuButton.classList.toggle("open");
        menuDrawer.classList.toggle("active");
        menuOverlay.classList.toggle("active");

        if (!isExpanded) {

            setTimeout(() => {
                menuFirstLink?.focus();
            }, FOCUS_DELAY_MS);

        } else {

            menuButton.focus();

        }

    });

}

/* ==========================================================================
   4. HEADER INVITE BUTTON
   ========================================================================== */

const headerInviteButton = document.getElementById("inviteBtn");

headerInviteButton?.addEventListener("click", () => {
    console.log("Invite button clicked.");
});

/* CONTACT FORM VALIDATION & EMAILJS (WITH OPTIMIZED LOADING FEEDBACK) */
const userContactSubmissionForm = document.getElementById('contactForm');
if (userContactSubmissionForm) {
    userContactSubmissionForm.addEventListener('submit', function(formSubmitEvent) {
        formSubmitEvent.preventDefault();

        // Target the button inside this form to manage its state
        const submitButton = this.querySelector('button') || this.querySelector('.request-invite-btn');

        const verifiedClientName = document.getElementById('name').value.trim();
        const verifiedClientEmail = document.getElementById('email').value.trim();
        const verifiedClientMessage = document.getElementById('message').value.trim();
        let isValidationPassing = true;

        if (verifiedClientName === "" || verifiedClientEmail === "" || verifiedClientMessage === "") {
            alert("Please fill in all fields before requesting an invite.");
            isValidationPassing = false;
        } else if (!verifiedClientEmail.includes("@")) {
            alert("Please enter a valid email address.");
            isValidationPassing = false;
        }

        if (isValidationPassing) {
            // OPTIMIZED: Provide immediate visual feedback while the network request loads
            if (submitButton) {
                submitButton.innerText = "Sending...";
                submitButton.style.opacity = "0.7";
                submitButton.disabled = true; // Prevent multiple duplicate submissions
            }

            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
                .then(function() {
                    alert(`Thank you, ${verifiedClientName}! Your request has been sent successfully.`);
                    userContactSubmissionForm.reset();
                }, function(apiExecutionError) {
                    alert('Failed to send the request. Please check your console.');
                    console.log('EmailJS SDK Error:', apiExecutionError);
                })
                .finally(function() {
                    // OPTIMIZED: Always restore the button to its original state after the network finishes
                    if (submitButton) {
                        submitButton.innerText = "Request Invite";
                        submitButton.style.opacity = "1";
                        submitButton.disabled = false;
                    }
                });
        }
    });
}


/* ==========================================================================
   6. BLOG SEARCH
   ========================================================================== */

const blogSearchInput =
    document.getElementById("blogSearch");

const blogCards =
    document.querySelectorAll(".blog-card");

if (blogSearchInput) {

    blogSearchInput.addEventListener("input", (event) => {

        const query =
            event.target.value.toLowerCase();

        blogCards.forEach((card) => {

            const title =
                card
                    .querySelector(".blog-card__title")
                    ?.textContent.toLowerCase() || "";

            card.style.display =
                title.includes(query)
                    ? "block"
                    : "none";

        });

    });

}

/* --- Login Interface Authentication Form Logic --- */
const activePortalLoginForm = document.getElementById('loginForm');

// Look for 'loginMessage' (camelCase) with a fallback to your old 'LoginMessage' (PascalCase)
let portalAuthenticationFeedbackDisplay = document.getElementById('loginMessage') || document.getElementById('LoginMessage');

if (activePortalLoginForm) {
    activePortalLoginForm.addEventListener('submit', (portalLoginEvent) => {
        portalLoginEvent.preventDefault(); // Prevents inputs from disappearing and page resetting
        
        const credentialsEmailInput = document.getElementById('LoginEmail').value.trim();
        const credentialsPasswordInput = document.getElementById('LoginPassword').value.trim();
        
        // Defensive Check: If the message div is missing in HTML, build it on the fly to prevent crashes
        if (!portalAuthenticationFeedbackDisplay) {
            portalAuthenticationFeedbackDisplay = document.createElement('div');
            portalAuthenticationFeedbackDisplay.id = 'loginMessage';
            activePortalLoginForm.parentNode.insertBefore(portalAuthenticationFeedbackDisplay, activePortalLoginForm.nextSibling);
        }
        
        // Authenticate credentials against demo parameters
        if (credentialsEmailInput === 'john@gmail.com' && credentialsPasswordInput === 'password123') {
            portalAuthenticationFeedbackDisplay.style.color = '#31D35C'; // Success Green
            portalAuthenticationFeedbackDisplay.innerText = "Login successful! Redirecting dashboard...";
            
            setTimeout(() => {
                window.location.href = "index.html"; // Redirects straight home
            }, 1500);
        } else {
            portalAuthenticationFeedbackDisplay.style.color = '#FF0000'; // Error Red
            portalAuthenticationFeedbackDisplay.innerText = "Invalid credentials. Please use the demo account values below.";
        }
    });
}


