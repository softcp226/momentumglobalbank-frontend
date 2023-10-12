// document.addEventListener("DOMContentLoaded", () => {
//   setInterval(() => {
//     const jarallax_img = document.querySelector("#jarallax-img");
//     jarallax_img.src = "";

//     if(jarallax_img.src == ""){

//     }
//   }, interval);
// });

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
let slides = 1;

const showSlides = () => {
  //   for (let index = 0; index < slides; index++) {
  //     const jarallax_img = document.querySelector("#jarallax-img");
  //     jarallax_img.src = "";
  //     return;
  //   }
  const jarallax_img = document.querySelector("#jarallax-img");
  jarallax_img.style.animationPlayState = "running";
  if (slides <= 2) {
    jarallax_img.style.backgroundImage =
      "url('css/assets/ingenico-US-Bank-services-02.png')";
    slides += 2;
    console.log(slides);
  } else {
    const jarallax_img = document.querySelector("#jarallax-img");
    jarallax_img.style.backgroundImage = "url('css/assets/Bank Teller.webp')";
    slides = 1;
    console.log("other slide", slides);
  }
};

(() => {
  setInterval(() => showSlides(), 5000);
})();
