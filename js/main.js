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
  const mainSlideClassList = document.getElementsByClassName("main_slide_item")[i].classList;
  mainSlideClassList.remove("active");
  i = i == 0 ? 2 : i - 1;
  mainSlideClassList.add("active");
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

// section 2 배경 바꾸기
const imgArr = ["img/main/second_page_img_01.png", "img/main/second_page_img_02.png", "img/main/second_page_img_03.png"]
const bgImg = document.querySelector(".section.second");
const business = document.getElementsByClassName("business_1");

for (let i = 0; i < imgArr.length; i++) {
  bgImg.style.backgroundImage = "url(" + imgArr[i] + ")";
  business[i].addEventListener("mouseover", function () {
    bgImg.style.backgroundImage = "url(" + imgArr[i] + ")";
  });
}


//Section2 Article1 버튼을 누르면 슬라이드
const smallPrev = document.querySelector(".btn_wrapper .prev");
const smallNext = document.querySelector(".btn_wrapper .next");
const smallPlay = document.querySelector(".btn_wrapper .play");

let j = 0;
const smallSlider = document.getElementsByClassName("small_slider");
const smallSlideAction = () => {
  // smallSliderClassList.forEach((a,b)=>{
    // console.log(a,b);
    smallSlider[j].classList.remove("on");
    // console.log(smallSliderClassList);
  // });
  j = j == 3 ? 0 : j + 1;
  smallSlider[j].classList.add("on");
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
  smallSlider[j].classList.remove("on");
  j = j == 0 ? 3 : j - 1;
  smallSlider[j].classList.add("on");
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
  const notice_list_on = document.querySelector(".notice_list.on");
  notice_menu_active.classList.remove("active");
  const thisID = li.getElementsByTagName("a")[0].getAttribute("href");
  li.classList.add("active");
  notice_list_on.classList.remove("on");
  document.querySelector(`.notice_list${thisID}`).classList.add("on");
};

// section 3 slide1
const news = {
  prev: document.querySelector("#news_prev"),
  pause: document.querySelector("#news_pause"),
  next: document.querySelector("#news_next"),
  wrap: document.querySelector(".news"),
};
let a = 1;
const newsPrevHandler = () => {
  a--;
  news.wrap.style.transform += "translateX(25%)";
  if (a < 1) {
    news.wrap.style.transform = "translateX(-50%)";
    a = 3;
  }
};
const newsNextHandler = () => {
  news.wrap.style.transform += "translateX(-25%)";
  a++;
  if (a > 3) {
    news.wrap.style.transform = "translateX(0)";
    a = 1;
  }
};

let isNewsPause = true;
let interval3 = setInterval(newsNextHandler, 4000);
const newsPauseBtnClassList = news.pause.querySelector("i.newsicon").classList;
const newsPauseHandler = () => {
  isNewsPause = !isNewsPause;
  if (!isNewsPause) {
    newsPauseBtnClassList.remove("ri-pause-mini-fill");
    newsPauseBtnClassList.add("ri-play-mini-fill");
    clearInterval(interval3);
  } else {
    newsPauseBtnClassList.classList.add("ri-pause-mini-fill");
    newsPauseBtnClassList.remove("ri-play-mini-fill");
    interval3 = setInterval(newsNextHandler, 4000);
  }
};
news.prev.addEventListener("click", newsPrevHandler);
news.pause.addEventListener("click", newsPauseHandler);
news.next.addEventListener("click", newsNextHandler);

// section 3 slide2
const notice = {
  prev: document.querySelector("#notice_prev"),
  pause: document.querySelector("#notice_pause"),
  next: document.querySelector("#notice_next"),
  wrap: document.querySelector(".notice_con"),
};
let b = 1;
const noticePrevHandler = () => {
  notice.wrap.style.transform += "translateY(50%)";
  b--;
  if (b < 1) {
    notice.wrap.style.transform = "translateY(-50%)";
    b = 2;
  }
};
const noticeNextHandler = () => {
  notice.wrap.style.transform += "translateY(-50%)";
  if (b > 1) {
    notice.wrap.style.transform = "translateY(0)";
    b = 0;
  }
  b++;
};

let isNoticePause = true;
let interval4 = setInterval(noticeNextHandler, 3000);
const noticePauseBtnClassList = notice.pause.querySelector("i.noticeicon").classList;
const noticePauseHandler = () => {
  isNoticePause = !isNoticePause;
  if (!isNoticePause) {
    noticePauseBtnClassList.remove("ri-pause-mini-fill");
    noticePauseBtnClassList.add("ri-play-mini-fill");
    clearInterval(interval4);
  } else {
    noticePauseBtnClassList.add("ri-pause-mini-fill");
    noticePauseBtnClassList.remove("ri-play-mini-fill");
    interval4 = setInterval(noticeNextHandler, 3000);
  }
};

notice.prev.addEventListener("click", noticePrevHandler);
notice.pause.addEventListener("click", noticePauseHandler);
notice.next.addEventListener("click", noticeNextHandler);
