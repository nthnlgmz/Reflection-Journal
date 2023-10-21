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

if (window.location.href.indexOf("https://nthnlgmz.github.io/Reflection-Journal/") === -1) {
    // Redirect to a custom 404 error page
    window.location.href = "https://dione.batstate-u.edu.ph/student/#/";
}

