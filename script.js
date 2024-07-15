'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[container px-4 px-lg-5]");
const navbarToggleBtn = document.querySelector("[navbar-togglern]");

navbarToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });



// whishlist button
const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]");

for (let i = 0; i < whishlistBtn.length; i++) {

  whishlistBtn[i].addEventListener("click", function () { elemToggleFunc(this); });

}



// go to top variable
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});