 document.addEventListener('DOMContentLoaded', function () {
      const burger = document.querySelector('.navbar-burger');
      const drawer = document.querySelector('.drawer');
      
      burger.addEventListener('click', function () {
        drawer.classList.toggle('open');
      });
      
      document.addEventListener('click', function (event) {
        if (drawer.classList.contains('open') && !drawer.contains(event.target) && !burger.contains(event.target)) {
          drawer.classList.remove('open');
        }
      });
    });
