/* SLIDE */
const slide1 = document.getElementsByClassName("main_slide1")[0];
const slide2 = document.getElementsByClassName("main_slide2")[0];
const slide3 = document.getElementsByClassName("main_slide3")[0];

// const slideAction = () => {
//   if (slide1.classList.contains("active")) {
//     slide1.classList.remove("active");
//     slide2.classList.add("active");
//   } else if (slide2.classList.contains("active")) {
//     slide2.classList.remove("active");
//     slide3.classList.add("active");
//   } else if (slide3.classList.contains("active")) {
//     slide3.classList.remove("active");
//     slide1.classList.add("active");
//   }
// };

// setInterval(slideAction, 5000);

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

//스크롤이 섹션 3에 있을 때 헤더에 액티브 주기
// new fullpage("#fullpage", {
//   onLeave: function (origin, destination, direction, trigger) {
//     var leavingSection = this;
//     console.log(this);
//     //after leaving section 2
//     if (origin.index == 1 && direction == "down") {
//       alert("Going to section 3!");
//     } else if (origin.index == 1 && direction == "up") {
//       alert("Going to section 1!");
//     }
//   },
// });

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
// $(function () {
//   $(".depth1")
//     .mouseover(function () {
//       $(this).find(".depth2_bg").stop().show();
//       console.log($(this).find(".depth2_bg"));
//     })
//     .mouseout(function () {

//     });
//   console.log(1);
// });
$(function () {
  $(".depth1").each(function () {
    let tg = $(this);
    // console.log(tg);
    tg.mouseover(function () {
      tg.find(".depth2_bg").addClass("active");
      // console.log(tg.find(".depth2_bg"));
    });
    tg.mouseout(function () {
      // $(this).find(".depth2_bg").stop().slideUp();
      tg.find(".depth2_bg").removeClass("active");
    });
  });
  // console.log(1);
});

// SWIPER
// Swiper - Pause
const pauseButton = document.getElementById("swiper-pause-button");
function swiperPause() {
  if (mainSlider.autoplay.running == false) {
    mainSlider.autoplay.start();
  } else if (mainSlider.autoplay.running == true) {
    mainSlider.autoplay.stop();
  }
}
pauseButton.addEventListener("click", swiperPause);
