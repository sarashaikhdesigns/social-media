document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector('.hamburger-menu');
  var menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function () {
      menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
  });

  function showSlides(slideClass, interval) {
      let slides = document.getElementsByClassName(slideClass);
      let slideIndex = 0;

      function displayNextSlide() {
          for (let i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > slides.length) {
              slideIndex = 1;
          }
          slides[slideIndex - 1].style.display = "block";
          setTimeout(displayNextSlide, interval); // Change image at specified interval
      }

      displayNextSlide();
  }

  showSlides("typeSlides", 2000);    
  showSlides("fashionSlides", 1500); 
  showSlides("photoSlides", 1000);  
  showSlides("artSlides", 1500);     
});
