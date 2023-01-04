/* header 모바일 */
window.onresize = (event) => {
  const pcHeader = document.querySelector("header.pc");
  const moHeader = document.querySelector("header.mo");
  const moHeaderMenu = document.querySelector("header.mo .header_menu");
  const moHeaderBtn = document.querySelector("header.mo .all_menu");
  let isView = false;
  const displayHeader = () => {
    isView = !isView;
    isView ? (moHeaderMenu.style.display = "flex") : (moHeaderMenu.style.display = "none");
  };
  if (screen.width < 1240) {
    moHeaderBtn.addEventListener("click", displayHeader);
  } else {
  }
};
const header = document.querySelector("header.pc");
const headerActive = () => {
  header.classList.add("active");
  document.getElementsByClassName("logoImg")[0].src = "./img/logo/logo.png";
};
const headerNonActive = () => {
  header.classList.remove("active");
  document.getElementsByClassName("logoImg")[0].src = "./img/logo/logo_w.png";
};
header.addEventListener("mouseover", headerActive);
// header.addEventListener("mouseout", headerNonActive);

/* Mobile HEADER */
const mobileHeaderVieweBtn = document.querySelector("#all_menu");
const clickMobileHeaderBtnHandler = () => {
  console.log(mobileHeaderVieweBtn);
};

mobileHeaderVieweBtn.addEventListener("click", clickMobileHeaderBtnHandler);

/* HEADER - DEPTH */
let mainHeader = document.querySelector("header.pc");
let openMainHeader = document.querySelector("header.pc.open");
const mainHeaderEnterHandler = (depth1) => {
  let headerInner = depth1.querySelector(".depth2_wrapper .inner");
  let headerWrapper = depth1.querySelector(".depth2_wrapper");
  mainHeader.classList.add("open");
  depth1.classList.add("on");
  document.querySelector(".overlay").style.display = "block";
  mainHeader.style.height = headerInner.style.height;
  mainHeader.style.overflow = "hidden";
};
const mainHeaderLeaveHandler = (depth1) => {
  mainHeader.style.height = "100px";
  mainHeader.classList.remove("open");
  depth1.classList.remove("on");
  mainHeader.style.overflow = "unset";
  document.querySelector(".overlay").style.display = "none";
};

/* 상단 검색버튼 */
const searchBtn = document.querySelector(".search_icon");
const search = document.querySelector(".search_bar");
let isOn = true;

const searchBtnClickHandler = () => {
  isOn ? search.classList.add("on") : search.classList.remove("on");
  isOn = !isOn;
};

searchBtn.addEventListener("click", searchBtnClickHandler);
