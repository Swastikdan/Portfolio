let navLinks = document.querySelector(".nav-links"),
  menuOpenBtn = document.querySelector(".navbar .bx-menu"),
  menuCloseBtn = document.querySelector(".nav-links .bx-x");
(menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}),
  (menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
  });
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};
