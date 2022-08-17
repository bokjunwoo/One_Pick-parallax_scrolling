window.addEventListener("scroll", function(){
  console.log(scrollY);
})

gsap.registerPlugin(ScrollTrigger);

gsap.to(".pin", {
  scrollTrigger: {
    trigger: "body",
    toggleActions: "restart",
    end: "+=50000",
    // markers: true,
    scrub: true,    
    pin: true,
  },
  x:1550,
  duration: 1,
});

gsap.to(".item01", {
  scrollTrigger: {
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,    
  },
  x:-1500,
  duration: 1,
});
gsap.to(".item02", {
  scrollTrigger: {
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  x:700,
  duration: 1,
});
gsap.to(".item03_1", {
  scrollTrigger: {
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  x:150,
  y:-1500,
  scale:3,
  duration: 1,
});
gsap.to(".item03_2", {
  scrollTrigger: {
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  scale:7,
  x:-450,
  y:1500,
  rotate:-125,
  // opacity:0,
  duration: 1,
});
gsap.to(".item04", {
  scrollTrigger: {
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  x:-800,
  duration: 1,
});
gsap.to(".item05_1", {
  scrollTrigger: {
    trigger: ".trigger_item05_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity:1,
  duration: 1,
});
gsap.to(".item05_1", {
  scrollTrigger: {
    trigger: ".trigger_item05_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  color: "transparent",
  duration: 1,
});
gsap.to(".item05_2", {
  scrollTrigger: {
    trigger: ".trigger_item05_1_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity:1,
  scale:2,
  duration: 1,
});
gsap.to(".item05_2_video", {
  scrollTrigger: {
    trigger: ".trigger_item05_1_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item_characters", {
  scrollTrigger: {
    trigger: ".item_characters_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity:1,
  duration: 1,
});
gsap.to(".item_characters", {
  scrollTrigger: {
    trigger: ".item_characters_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  color: "transparent",
  duration: 1,
});
gsap.to(".item06", {
  scrollTrigger: {
    trigger: ".trigger_item06_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  scale:6,
  x:-450,
  y:1500,
  opacity:1,
  duration: 1,
});
gsap.to(".item07", {
  scrollTrigger: {
    trigger: ".trigger_item07_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  scale:6,
  x:450,
  y:1500,
  opacity:1,
  duration: 1,
});
gsap.to(".item08", {
  scrollTrigger: {
    trigger: ".trigger_item08_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  scale:6,
  x:-450,
  y:1500,
  opacity:1,
  duration: 1,
});
gsap.to(".item09", {
  scrollTrigger: {
    trigger: ".trigger_item09_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  scale:6,
  x:450,
  y:1500,
  opacity:1,
  duration: 1,
});
gsap.to(".item10", {
  scrollTrigger: {
    trigger: ".trigger_item10_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  scale:6,
  x:-450,
  y:1500,
  opacity:1,
  duration: 1,
});
gsap.to(".item11", {
  scrollTrigger: {
    trigger: ".trigger_item11_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  scale:6,
  x:450,
  y:1500,
  opacity:1,
  duration: 1,
});
gsap.to(".item12", {
  scrollTrigger: {
    trigger: ".trigger_item12_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  scale:6,
  x:-450,
  y:1500,
  opacity:1,
  duration: 1,
});
gsap.to(".item13", {
  scrollTrigger: {
    trigger: ".trigger_item13_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  scale:6,
  x:450,
  y:1500,
  opacity:1,
  duration: 1,
});
gsap.to(".item14_1", {
  scrollTrigger: {
    trigger: ".trigger_item14_in",
    toggleActions: "restart",
    end: "+=5500",
    // markers: true,
    scrub: true,   
  },
  opacity:1,
  xPercent: -550,
  yPercent: -130,
  scale: 3,
  duration: 1,
});
gsap.to(".item14_2", {
  scrollTrigger: {
    trigger: ".trigger_item14_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity:1,
  duration: 1,
});
gsap.to(".item14_2", {
  scrollTrigger: {
    trigger: ".trigger_item14_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  color: "transparent",
  duration: 1,
});
gsap.to(".item_story_title", {
  scrollTrigger: {
    trigger: ".trigger_item_story_title_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity: 1,
  duration: 1,
});
gsap.to(".item_story_title", {
  scrollTrigger: {
    trigger: ".trigger_item_story_title_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  color: "transparent",
  duration: 1,
});
gsap.from(".item_story_circle", {
  scrollTrigger: {
    trigger: ".trigger_item_story_circle",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  xPercent: 100,
  yPercent: 100,
  duration: 1,
});
gsap.to(".item_story_circle", {
  scrollTrigger: {
    trigger: ".trigger_item_story_circle",
    toggleActions: "restart",
    end: "+=3000",
    // markers: true,
    scrub: true,   
  },
  backgroundColor:"#f7f5f3",
  duration: 1,
});
gsap.to(".item_story_circle", {
  scrollTrigger: {
    trigger: ".trigger_item_story04_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  y: -2000,
  x: -2000,
  // opacity:0,
  duration: 1,
});

// item_part01_img01
gsap.from(".item_part01_img01", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  yPercent:-120,
  duration: 1,
});
gsap.from(".item_part01_img02", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  xPercent:130,
  duration: 1,
});
gsap.from(".item_part01_img03", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  xPercent:-210,
  duration: 1,
});
gsap.from(".item_part01_text01", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  x: -1200,
  duration: 1,
});
gsap.from(".item_part01_text01_01", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  duration: 1,
});
gsap.from(".item_part01_text01_02", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  duration: 1,
});
gsap.from(".item_part01_text02", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item_part01_img01", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_out",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  y:-1200,
  duration: 1,
});
gsap.to(".item_part01_img02", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_out",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  x:1300,
  duration: 1,
});
gsap.to(".item_part01_img03", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  x:-1200,
  duration: 1,
});
gsap.to(".item_part01_text01_01", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item_part01_text01_02", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item_part01_text02", {
  scrollTrigger: {
    trigger: ".trigger_item_story01_out",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  color: "transparent",
  duration: 1,
});

// item_part02_img01
gsap.from(".item_part02_img01", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  yPercent:-120,
  duration: 1,
});
gsap.from(".item_part02_img02", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  xPercent:140,
  duration: 1,
});
gsap.from(".item_part02_img03", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  xPercent:210,
  duration: 1,
});
gsap.from(".item_part02_text01", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  x: -1200,
  duration: 1,
});
gsap.from(".item_part02_text01_01", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  duration: 1,
});
gsap.from(".item_part02_text01_02", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  duration: 1,
});
gsap.from(".item_part02_text02", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item_part02_img01", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_out",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  y:-1200,
  duration: 1,
});
gsap.to(".item_part02_img02", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_out",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  x:1300,
  duration: 1,
});
gsap.to(".item_part02_img03", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  x:1200,
  duration: 1,
});
gsap.to(".item_part02_text01_01", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item_part02_text01_02", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item_part02_text02", {
  scrollTrigger: {
    trigger: ".trigger_item_story02_out",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  color: "transparent",
  duration: 1,
});

// item_part03_img01
gsap.from(".item_part03_img01", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_in",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  yPercent:-120,
  duration: 1,
});
gsap.from(".item_part03_img02", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  xPercent:-200,
  duration: 1,
});
gsap.from(".item_part03_img03", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  xPercent:-210,
  duration: 1,
});
gsap.from(".item_part03_img04", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  xPercent:210,
  duration: 1,
});
gsap.from(".item_part03_text01", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  x: 1200,
  duration: 1,
});
gsap.from(".item_part03_text01_01", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  duration: 1,
});
gsap.from(".item_part03_text01_02", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_in",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  duration: 1,
});
gsap.from(".item_part03_text02", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item_part03_img01", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_out",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  y:-1200,
  duration: 1,
});
gsap.to(".item_part03_img02", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_out",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  x:-1300,
  duration: 1,
});
gsap.to(".item_part03_img03", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  x:-1200,
  duration: 1,
});
gsap.to(".item_part03_img04", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  x:1200,
  duration: 1,
});
gsap.to(".item_part03_text01_01", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item_part03_text01_02", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item_part03_text02", {
  scrollTrigger: {
    trigger: ".trigger_item_story03_out",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  color: "transparent",
  duration: 1,
});



gsap.to(".item15", {
  scrollTrigger: {
    trigger: ".trigger_item15_in",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  scale: 8,
  duration: 1,
});
gsap.to(".item15", {
  scrollTrigger: {
    trigger: ".trigger_item15_in",
    toggleActions: "restart",
    end: "+=500",
    // markers: true,
    scrub: true,   
  },
  opacity: 1,
  duration: 1,
});
gsap.to(".item16", {
  scrollTrigger: {
    trigger: ".trigger_item15_in",
    toggleActions: "restart",
    end: "+=3000",
    // markers: true,
    scrub: true,   
  },
  opacity: 1,
  duration: 1,
});

gsap.to(".item17", {
  scrollTrigger: {
    trigger: ".trigger_item16_pro",
    toggleActions: "restart",
    end: "+=3000",
    // markers: true,
    scrub: true,   
  },
  scale: 0,
  opacity: 1,
  yPercent: -100,
  duration: 1,
  rotate: 360*2,
});
gsap.to(".item16_video", {
  scrollTrigger: {
    trigger: ".trigger_item16_out",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item18", {
  scrollTrigger: {
    trigger: ".trigger_item18_in",
    toggleActions: "restart",
    end: "+=3500",
    // markers: true,
    scrub: true,   
  },
  opacity: 1,
  duration: 1,
});
gsap.to(".item19_img", {
  scrollTrigger: {
    trigger: ".trigger_item19_in",
    toggleActions: "restart",
    end: "+=15000",
    // markers: true,
    scrub: true,   
  },
  scale: 100,
  // yPercent: 100,
  duration: 1,
  rotate: 360*3,
});
gsap.to(".item19_img", {
  scrollTrigger: {
    trigger: ".trigger_item19_in",
    toggleActions: "restart",
    end: "+=50",
    // markers: true,
    scrub: true,   
  },
  opacity: 1,
  duration: 1,
});
gsap.to(".item19", {
  scrollTrigger: {
    trigger: ".trigger_item19_in",
    toggleActions: "restart",
    end: "+=15000",
    // markers: true,
    scrub: true,   
  },
  xPercent:150,
  yPercent:150,
  duration: 1,
});
gsap.to(".item18_video", {
  scrollTrigger: {
    trigger: ".trigger_item18_out",
    toggleActions: "restart",
    end: "+=1500",
    // markers: true,
    scrub: true,   
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".item20", {
  scrollTrigger: {
    trigger: ".trigger_item18_out",
    toggleActions: "restart",
    end: "+=1000",
    // markers: true,
    scrub: true,   
  },
  opacity:1,
  duration: 1,
});
gsap.to(".item20", {
  scrollTrigger: {
    trigger: ".trigger_item20_out",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  color: "transparent",
  duration: 1,
});
gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".trigger_footer",
    toggleActions: "restart",
    end: "+=2000",
    // markers: true,
    scrub: true,   
  },
  yPercent: 100,
  duration: 1,
});


const item01 = document.querySelector(".item01");
const item02 = document.querySelector(".item02");
const item03_1 = document.querySelector(".item03_1");
const item03_2 = document.querySelector(".item03_2");
const item04 = document.querySelector(".item04");
window.addEventListener('load', (event) => {
    item01.style.animation = "fadeInAnimation ease 2s";
    item02.style.animation = "fadeInAnimation ease 2s";
    item03_1.style.animation = "fadeInAnimation ease 3s";
    item03_2.style.animation = "fadeInAnimation ease 2s";
    item04.style.animation = "fadeInAnimation ease 3s";
});

const headerMenu = document.querySelector(".header_menu");
const headerOpened = document.querySelector(".header_opened");

headerMenu.addEventListener("click", function(){
  if(headerOpened.style.display === "none"){
  headerOpened.style.display = "flex"
  }else{
    headerOpened.style.display = "none"
  }
})

// const apv = document.querySelector("#apv");
// const sg = document.querySelector(".sg");
// const sg2 = document.querySelector("#sg2");
// window.addEventListener("load", function(){
//   if(apv.innerHTML == "인증안됨"){
//     console.log("인증안됨");
//     sg.href = "/signup";
//     sg.innerHTML = `<i class="fa-solid fa-user-plus"></i>`;
//   }else if(apv.innerHTML == "인증됨"){
//     console.log("인증됨");
//     sg.href = "/logout";
//     sg.innerHTML = `<i class="fa-solid fa-arrow-right-from-bracket"></i>`;
//   }
// })


