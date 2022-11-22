/* SLIDE */
const slide1 = document.getElementsByClassName("main_slide1")[0];
const slide2 = document.getElementsByClassName("main_slide2")[0];
const slide3 = document.getElementsByClassName("main_slide3")[0];
console.log(slide1.style);

const slideAction = () => {
  setInterval(() => (document.slide1.style.opacity = 0), 5000);
};

/* HEADER */
const header = document.getElementsByTagName("header")[0];
const headerActive = () => {
  header.className = "active";
  document.getElementsByClassName("logoImg")[0].src = "img/logo/logo.png";
};
const headerNonActive = () => {
  header.classList.remove("active");
  document.getElementsByClassName("logoImg")[0].src = "img/logo/logo_w.png";
};
header.addEventListener("mouseover", headerActive);
header.addEventListener("mouseout", headerNonActive);

/* HEADER - DEPTH */
// const depth1 = document.querySelectorAll(".depth1");
// const depth2_bg = document.querySelectorAll(".depth2_bg");
// console.log(depth1);
// const menuDropDown = () => {
//   depth2_bg.classList.add("active");
// };
// const menuUp = () => {
//   depth2_bg.classList.remove("active");
// };
// depth1.addEventListener("mouseover", menuDropDown);
// depth1.addEventListener("mouseout", menuUp);
$(function () {
  $(".depth1")
    .mouseover(function () {
      $(this).find(".depth2_bg").stop().show();
      console.log($(this).find(".depth2_bg"));
    })
    .mouseout(function () {
      // $(this).find(".depth2_bg").stop().slideUp();
    });
  console.log(1);
});
