/* SLIDE */
const slide1 = document.getElementsByClassName("main_slide1")[0];
const slide2 = document.getElementsByClassName("main_slide2")[0];
const slide3 = document.getElementsByClassName("main_slide3")[0];
console.log(slide1.style);


const slideAction = () => {
  setInterval(() => document.slide1.style.opacity = 0, 5000);
}
