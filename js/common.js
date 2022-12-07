// fullpage
$(function () {
  $("#fullpage").fullpage({
    anchors: ["#section1", "#section2", "#section3", "#section4"],
    slideNavigation: true,
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["01 Main", "02 Business", "03 News"],
    afterLoad: function (anchorLink, index) {
      if (index == 3) {
        headerActive();
      }
      return index;
    },
  });
});
/* HEADER */
const header = document.getElementsByTagName("header")[0];
const headerActive = () => {
  header.classList.add("active");
  document.getElementsByClassName("logoImg")[0].src = "img/logo/logo.png";
};
const headerNonActive = () => {
  header.classList.remove("active");
  document.getElementsByClassName("logoImg")[0].src = "img/logo/logo_w.png";
};
header.addEventListener("mouseover", headerActive);
header.addEventListener("mouseout", headerNonActive);
/* SLIDE */
// 221206 현재 봉인 중
// const slide1 = document.getElementsByClassName("main_slide1")[0];
// const slide2 = document.getElementsByClassName("main_slide2")[0];
// const slide3 = document.getElementsByClassName("main_slide3")[0];

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

// let i = 0;
// const slideAction = () => {
//   document.getElementsByClassName("main_slide_item")[i].classList.remove("active");
//   if (i == 2) {
//     i = 0;
//     document.getElementsByClassName("main_slide_item")[i].classList.add("active");
//   } else {
//     document.getElementsByClassName("main_slide_item")[i + 1].classList.add("active");
//     i++;
//   }
// };

// 개천재들
let i = 0;
const slideAction = () => {
  document.getElementsByClassName("main_slide_item")[i].classList.remove("active");
  i = i == 2 ? 0 : i + 1;
  document.getElementsByClassName("main_slide_item")[i].classList.add("active");
};

let interval = setInterval(slideAction, 5000);

// 슬라이드 스위치
// 221206 정지 동작 중
// 221207 다음 동작 중
// 221207 이전 동작 중
const slideprev = document.getElementById("mainSlidePrev");
const slidepause = document.getElementById("mainSlidePause");
const slidenext = document.getElementById("mainSlideNext");

// 메인 슬라이드 이전 버튼
const mainSlidePrevClick = () => {
  document.getElementsByClassName("main_slide_item")[i].classList.remove("active");
  i = i == 0 ? 2 : i - 1;
  document.getElementsByClassName("main_slide_item")[i].classList.add("active");
};
// 메인 슬라이드 다음 버튼
const mainSlideNextClick = () => {
  slideAction();
};
// 메인 슬라이드 정지 버튼
let isPause = false;
const mainSlidePauseClick = () => {
  if (isPause) {
    interval = setInterval(slideAction, 5000);
  } else {
    clearInterval(interval);
  }
  isPause = !isPause;
  // isPause ? (interval = setInterval(slideAction, 2000)) : clearInterval(interval);
  // isPause != isPause;
  // (조건) ? T:F
};

//Section 2 마우스가 특정 아티클 부분에 있을 때 배경화면 바뀌기(3개뿐이니까.....)
const business1 = document.getElementsByClassName("business_1")[0];
const business2 = document.getElementsByClassName("business_1")[1];
const business3 = document.getElementsByClassName("business_1")[2];
const bgImg = document.querySelector(".section.second");
const change1 = () => {
  bgImg.style.backgroundImage = "url(img/main/second_page_img_01.png)";
};
const change2 = () => {
  bgImg.style.backgroundImage = "url(img/main/second_page_img_02.png)";
};
const change3 = () => {
  bgImg.style.backgroundImage = "url(img/main/second_page_img_03.png)";
};
business1.addEventListener("mouseover", change1);
business2.addEventListener("mouseover", change2);
business3.addEventListener("mouseover", change3);

//Section2 Article1 버튼을 누르면 슬라이드
const smallPrev = document.querySelector(".btn_wrapper .prev");
const smallNext = document.querySelector(".btn_wrapper .next");
const smallPlay = document.querySelector(".btn_wrapper .play");

let j = 0;
const smallSlideAction = () => {
  document.getElementsByClassName("small_slider")[j].classList.remove("on");
  j = j == 3 ? 0 : j + 1;
  document.getElementsByClassName("small_slider")[j].classList.add("on");
};

let isPlay = false;
let interval2 = null;
const smallPlayHandler = () => {
  isPlay = !isPlay;
  if (isPlay) {
    interval2 = setInterval(smallSlideAction, 2000);
  } else {
    clearInterval(interval2);
  }
};

const smallPrevHandler = () => {
  document.getElementsByClassName("small_slider")[j].classList.remove("on");
  j = j == 0 ? 3 : j - 1;
  document.getElementsByClassName("small_slider")[j].classList.add("on");
};

const smallNextHandler = () => {
  smallSlideAction();
};

smallPrev.addEventListener("click", smallPrevHandler);
smallNext.addEventListener("click", smallNextHandler);
smallPlay.addEventListener("click", smallPlayHandler);

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

// HEADER
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
