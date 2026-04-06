const btn = document.querySelector('.dropdown-toggle');
      const menu = document.querySelector('.mobile-menu');
      const overlay = document.querySelector('.overlay');

      btn.addEventListener('click', () =>{
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        console.log("Menu Toggled!");
      });