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

const mainSlidePrevClick = () => {
  document.getElementsByClassName("main_slide_item")[i].classList.remove("active");
  i = i == 0 ? 2 : i - 1;
  document.getElementsByClassName("main_slide_item")[i].classList.add("active");
};
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

slideprev.addEventListener("click", mainSlidePrevClick);
slidepause.addEventListener("click", mainSlidePauseClick);
slidenext.addEventListener("click", mainSlideNextClick);

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

// Section 2 LONG SLIDE
const longSlidePrev = document.querySelector(".service_btn_wrapper .prev");
const longSlideNext = document.querySelector(".service_btn_wrapper .next");
const longSlide = document.querySelector(".service_slider ul");

const longSlidePrevHandler = () => {
  longSlide.style.transform = "translateX(0)";
};
const longSlideNextHandler = () => {
  longSlide.style.transform = "translateX(-50%)";
};

longSlidePrev.addEventListener("click", longSlidePrevHandler);
longSlideNext.addEventListener("click", longSlideNextHandler);

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

// section 3 tab
const notice_menu = document.querySelector(".notice_menu_list li");
const noticeMenuClickHandler = (event) => {
  const notice_menu_active = document.querySelector(".notice_menu_list li.active");
  const notice_list = document.querySelector(".notice_list");
  notice_menu_active.classList.remove("active");
  console.log(event);
  event.classList.add("active");

  // event.target.classList.add("active");
};

// section 3 slide1
const newsPrevBtn = document.querySelector("#news_prev");
const newsPauseBtn = document.querySelector("#news_pause");
const newsNextBtn = document.querySelector("#news_next");
const newsWrap = document.querySelector(".news");

let a = 1;
const newsPrevHandler = () => {
  a--;
  newsWrap.style.transform += "translateX(25%)";
  if (a < 1) {
    newsWrap.style.transform = "translateX(-50%)";
    a = 3;
  }
};
const newsNextHandler = () => {
  newsWrap.style.transform += "translateX(-25%)";
  a++;
  if (a > 3) {
    newsWrap.style.transform = "translateX(0)";
    a = 1;
  }
};
let isNewsPause = true;
let interval3 = setInterval(newsNextHandler, 4000);
const newsPauseHandler = () => {
  isNewsPause = !isNewsPause;
  if (!isNewsPause) {
    newsPauseBtn.querySelector("i.newsicon").classList.remove("ri-pause-mini-fill");
    newsPauseBtn.querySelector("i.newsicon").classList.add("ri-play-mini-fill");
    clearInterval(interval3);
  } else {
    newsPauseBtn.querySelector("i.newsicon").classList.add("ri-pause-mini-fill");
    newsPauseBtn.querySelector("i.newsicon").classList.remove("ri-play-mini-fill");
    interval3 = setInterval(newsNextHandler, 4000);
  }
};
newsPrevBtn.addEventListener("click", newsPrevHandler);
newsPauseBtn.addEventListener("click", newsPauseHandler);
newsNextBtn.addEventListener("click", newsNextHandler);

// section 3 slide2
const noticePrevBtn = document.querySelector("#notice_prev");
const noticePauseBtn = document.querySelector("#notice_pause");
const noticeNextBtn = document.querySelector("#notice_next");
const noticeWrap = document.querySelector(".notice_con");

let b = 1;
const noticePrevHandler = () => {
  noticeWrap.style.transform += "translateY(50%)";
  b--;
  if (b < 1) {
    noticeWrap.style.transform = "translateY(-50%)";
    b = 2;
  }
};

const noticeNextHandler = () => {
  noticeWrap.style.transform += "translateY(-50%)";
  if (b > 1) {
    noticeWrap.style.transform = "translateY(0)";
    b = 0;
  }
  b++;
};

let isNoticePause = true;
let interval4 = setInterval(noticeNextHandler, 3000);
const noticePauseHandler = () => {
  isNoticePause = !isNoticePause;
  if (!isNoticePause) {
    noticePauseBtn.querySelector("i.noticeicon").classList.remove("ri-pause-mini-fill");
    noticePauseBtn.querySelector("i.noticeicon").classList.add("ri-play-mini-fill");
    clearInterval(interval3);
  } else {
    noticePauseBtn.querySelector("i.noticeicon").classList.add("ri-pause-mini-fill");
    noticePauseBtn.querySelector("i.noticeicon").classList.remove("ri-play-mini-fill");
    interval4 = setInterval(noticeNextHandler, 3000);
  }
};

noticePrevBtn.addEventListener("click", noticePrevHandler);
noticePauseBtn.addEventListener("click", noticePauseHandler);
noticeNextBtn.addEventListener("click", noticeNextHandler);
