// layer popup
document.querySelector("#layer button").addEventListener("click", () => {
  document.querySelector("#layer").style.display = "none";
});

/* SLIDE */
let i = 0; // current slide
const slideAction = () => {
  document.getElementsByClassName("main_slide_item")[i].classList.remove("active");
  i = i == 2 ? 0 : i + 1;
  document.getElementsByClassName("main_slide_item")[i].classList.add("active");
};

let interval = setInterval(slideAction, 5000);

// 슬라이드 스위치
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

//Section 2 마우스가 특정 아티클 부분에 있을 때 배경화면 바뀌기
const business1 = document.getElementsByClassName("business_1")[0];
const business2 = document.getElementsByClassName("business_1")[1];
const business3 = document.getElementsByClassName("business_1")[2];
const imgArr = ["img/main/second_page_img_01.png", "img/main/second_page_img_02.png", "img/main/second_page_img_03.png"]
const bgImg = document.querySelector(".section.second");
const change1 = () => {
  bgImg.style.backgroundImage = `url(${imgArr[0]})`;
};
const change2 = () => {
  bgImg.style.backgroundImage = `url(${imgArr[1]})`;
};
const change3 = () => {
  bgImg.style.backgroundImage = `url(${imgArr[2]})`;
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

// section 3 tab
const notice_menu = document.querySelector(".notice_menu_list li");
const noticeMenuClickHandler = (li) => {
  const notice_menu_active = document.querySelector(".notice_menu_list li.active");
  // const notice_list = document.querySelectorAll(".notice_list");
  const notice_list_on = document.querySelector(".notice_list.on");
  notice_menu_active.classList.remove("active");
  const thisID = li.getElementsByTagName("a")[0].getAttribute("href");
  li.classList.add("active");
  notice_list_on.classList.remove("on");
  document.querySelector(`.notice_list${thisID}`).classList.add("on");
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
    clearInterval(interval4);
  } else {
    noticePauseBtn.querySelector("i.noticeicon").classList.add("ri-pause-mini-fill");
    noticePauseBtn.querySelector("i.noticeicon").classList.remove("ri-play-mini-fill");
    interval4 = setInterval(noticeNextHandler, 3000);
  }
};

noticePrevBtn.addEventListener("click", noticePrevHandler);
noticePauseBtn.addEventListener("click", noticePauseHandler);
noticeNextBtn.addEventListener("click", noticeNextHandler);
