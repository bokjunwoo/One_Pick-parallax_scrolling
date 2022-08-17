var s = skrollr.init();

window.addEventListener("scroll", function () {
  // 스크롤 위치값
  console.log(scrollY);
});

const headerMenu = document.querySelector(".header_menu");
const headerOpened = document.querySelector(".header_opened");

headerMenu.addEventListener("click", function () {
  if (headerOpened.style.display === "none") {
    headerOpened.style.display = "flex";
  } else {
    headerOpened.style.display = "none";
  }
});

// const cursor = document.querySelector(".cursor");
// mouseEffect.addEventListener("mousemove", (e) => {
//   cursor.style.left = `${e.clientX}px`;
//   cursor.style.top = `${e.clientY}px`;
// });
// gsap.registerPlugin(ScrollTrigger);

// gsap.defaults({
//   ease: "none",
// });

// let tl = gsap.timeline();

// tl.to(".main_text", {
//   scrollTrigger: {
//     trigger: ".main_text",
//     scrub: true,
//     markers: true,
//     start: "300 650",
//     pin: true,
//   },
//   x: -500,
// });

// tl.to(".main_text2", {
//   scrollTrigger: {
//     trigger: ".main_text2",
//     scrub: true,
//     markers: true,
//     start: "-300 500",
//     pin: true,
//   },
//   x: 500,
// });
