let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("box");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

showSlides();

function nav_open() {
  document.querySelector("#nav1").style.display = "block";
}

function nav_close() {
  document.querySelector("#nav1").style.display = "none";
}