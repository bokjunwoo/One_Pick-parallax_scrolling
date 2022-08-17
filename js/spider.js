const headerMenu = document.querySelector(".header_menu");
const headerOpened = document.querySelector(".header_opened");

headerMenu.addEventListener("click", function () {
    if (headerOpened.style.display === "none") {
        headerOpened.style.display = "flex"
    } else {
        headerOpened.style.display = "none"
    }
})

// GSAP
gsap.registerPlugin(ScrollTrigger);

//시작화면
const section00 = gsap.timeline();

section00.to(".start_img", {
    duration: 1,
    opacity: 0,
    scale: 3,
})

ScrollTrigger.create({
    animation: section00,
    trigger: ".section_00",
    start: "top top ",
    end: "+=1000",
    scrub: 2,
    //markers: true,
    pin: true,
});

//1번째 
const section01 = gsap.timeline();

section01.from(".web_box1", {
    duration: 1,
    opacity: 0,
    scale: 3,
}).from(".sm_img1", {
    duration: 0.5,
    opacity: 0,
    scale: 3,
}).from(".web_box7", {
    duration: 1,
    opacity: 0,
    scale: 3,
}).to(".sm_img1", {
    duration: 0.5,
    opacity: 0,
}, "<").from(".sm_img7", {
    duration: 0.5,
    opacity: 0,
    scale: 3,
}).from(".web_box5", {
    duration: 1,
    opacity: 0,
    scale: 3,
}).to(".sm_img7", {
    duration: 0.5,
    opacity: 0,
}, "<").from(".sm_img5", {
    duration: 0.5,
    opacity: 0,
    scale: 3,
}).from(".web_box4", {
    duration: 1,
    opacity: 0,
    scale: 3,
}).to(".sm_img5", {
    duration: 0.5,
    opacity: 0,
}, "<").from(".sm_img4", {
    duration: 0.5,
    opacity: 0,
    scale: 3,
}).from(".web_box2", {
    duration: 1,
    opacity: 0,
    scale: 3,
}).to(".sm_img4", {
    duration: 0.5,
    opacity: 0,
}, "<").from(".sm_img2", {
    duration: 0.5,
    opacity: 0,
    scale: 3,
}).from(".web_box8", {
    duration: 1,
    opacity: 0,
    scale: 3,
}).to(".sm_img2", {
    duration: 0.5,
    opacity: 0,
}, "<").from(".sm_img8", {
    duration: 0.5,
    opacity: 0,
    scale: 3,
}).from(".web_box3", {
    duration: 1,
    opacity: 0,
    scale: 3,
}).to(".sm_img8", {
    duration: 0.5,
    opacity: 0,
}, "<").from(".sm_img3", {
    duration: 0.5,
    opacity: 0,
    scale: 3,
}).from(".web_box6", {
    duration: 1,
    opacity: 0,
    scale: 3,
}).to(".sm_img3", {
    duration: 0.5,
    opacity: 0,
}, "<").from(".sm_img6", {
    duration: 0.5,
    opacity: 0,
    scale: 3,
}).to(".sm_img6", {
    duration: 0.5,
    opacity: 0,
}).to(".web_box1", {
    duration: 1,
    opacity: 0,
    scale: 3,
}, "<").to(".web_box2", {
    duration: 1,
    opacity: 0,
    scale: 3,
}, "<").to(".web_box3", {
    duration: 1,
    opacity: 0,
    scale: 3,
}, "<").to(".web_box4", {
    duration: 1,
    opacity: 0,
    scale: 3,
}, "<").to(".web_box5", {
    duration: 1,
    opacity: 0,
    scale: 3,
}, "<").to(".web_box6", {
    duration: 1,
    opacity: 0,
    scale: 3,
}, "<").to(".web_box7", {
    duration: 1,
    opacity: 0,
    scale: 3,
}, "<").to(".web_box8", {
    duration: 1,
    opacity: 0,
    scale: 3,
}, "<").to(".web", {
    duration: 3,
});

ScrollTrigger.create({
    animation: section01,
    trigger: ".section_01",
    start: "top top ",
    end: "+=9000",
    scrub: 2,
    //markers: true,
    pin: true,
});


//2번째
const section02 = gsap.timeline();

section02.from(".main_img1", {
    delay: .5,
    scale: 2,
    duration: 1.5,
    opacity: 0,
}).from(".main_img2", {
    scale: 1.5,
    duration: 1.5,
    opacity: 0,
}).to(".main_img1", {
    duration: 1,
    opacity: 0,
}).to(".main_img2", {
    duration: 1,
    opacity: 0,
}, "<").to(".spider_img01", {
    scale: 1,
    opacity: 1,
    duration: 1,
}, "<").to(".spider_img01", {
    scale: 3,
    opacity: 0,
    duration: 3,
})

ScrollTrigger.create({
    animation: section02,
    trigger: ".section_02",
    start: "top top ",
    end: "+=5000",
    scrub: 2,
    //markers: true,
    pin: true,
});


//3번째
const section03 = gsap.timeline();

section03.from(".cast_item1", {
    duration: 1,
    opacity: 0,
    scale: 2,
}).from(".cast_item2", {
    duration: 1,
    opacity: 0,
    scale: 2,
}).from(".cast_item3", {
    duration: 1,
    opacity: 0,
    scale: 2,
}).from(".cast_item4", {
    duration: 1,
    opacity: 0,
    scale: 2,
}).from(".cast_item5", {
    duration: 1,
    opacity: 0,
    scale: 2,
}).from(".cast_item6", {
    duration: 1,
    opacity: 0,
    scale: 2,
}).from(".cast_item7", {
    duration: 1,
    opacity: 0,
    scale: 2,
}).from(".cast_item8", {
    duration: 1,
    opacity: 0,
    scale: 2,
}).from(".cast_item1", {
    duration: 3,
});

ScrollTrigger.create({
    animation: section03,
    trigger: ".section_03",
    start: "top top ",
    end: "+=5000",
    scrub: 2,
    //markers: true,
    pin: true,
});

const castText1 = document.querySelector(".cast_item1");

castText1.addEventListener("mouseover", function() {
    document.querySelector(".item_text1").innerHTML = "톰 홀랜드";
})

castText1.addEventListener("mouseleave", function() {
    document.querySelector(".item_text1").innerHTML = "스파이더맨 : 피터 파커";
})

const castText2 = document.querySelector(".cast_item2");

castText2.addEventListener("mouseover", function() {
    document.querySelector(".item_text2").innerHTML = "토비 맥과이어";
})

castText2.addEventListener("mouseleave", function() {
    document.querySelector(".item_text2").innerHTML = "스파이더맨 : 피터 파커";
})

const castText3 = document.querySelector(".cast_item3");

castText3.addEventListener("mouseover", function() {
    document.querySelector(".item_text3").innerHTML = "앤드류 가필드"
})

castText3.addEventListener("mouseleave", function() {
    document.querySelector(".item_text3").innerHTML = "스파이더맨 : 피터 파커"
})

const castText4 = document.querySelector(".cast_item4");

castText4.addEventListener("mouseover", function() {
    document.querySelector(".item_text4").innerHTML = "베네딕트 컴버배치"
})

castText4.addEventListener("mouseleave", function() {
    document.querySelector(".item_text4").innerHTML = "닥터 스트레인지"
})

const castText5 = document.querySelector(".cast_item5");

castText5.addEventListener("mouseover", function() {
    document.querySelector(".item_text5").innerHTML = "노먼 오스본"
})

castText5.addEventListener("mouseleave", function() {
    document.querySelector(".item_text5").innerHTML = "그린 고블린"
})

const castText6 = document.querySelector(".cast_item6");

castText6.addEventListener("mouseover", function() {
    document.querySelector(".item_text6").innerHTML = "플린트 마르코"
})

castText6.addEventListener("mouseleave", function() {
    document.querySelector(".item_text6").innerHTML = "샌드맨"
})

const castText7 = document.querySelector(".cast_item7");

castText7.addEventListener("mouseover", function() {
    document.querySelector(".item_text7").innerHTML = "오토 옥타비우스"
})

castText7.addEventListener("mouseleave", function() {
    document.querySelector(".item_text7").innerHTML = "닥터 오토퍼스"
})

const castText8 = document.querySelector(".cast_item8");

castText8.addEventListener("mouseover", function() {
    document.querySelector(".item_text8").innerHTML = "맥스 딜런"
})

castText8.addEventListener("mouseleave", function() {
    document.querySelector(".item_text8").innerHTML = "일렉트로"
})


//4번째
const section04 = gsap.timeline();

section04.from(".story_text_01", {
    scale: 1,
    duration: 1,
    opacity: 0,
}).from(".story_video1", {
    scale: 1,
    duration: 2,
    opacity: 0,
}, "<").from(".story_text_02", {
    scale: 1,
    duration: 1,
    opacity: 0,
}).from(".story_video2", {
    scale: 1,
    duration: 1,
    opacity: 0,
}, "<").from(".story_text_03", {
    scale: 1,
    duration: 2,
    opacity: 0,
}).from(".story_video3", {
    scale: 1,
    duration: 1,
    opacity: 0,
}, "<").from(".story", {
    duration: 3,
})

ScrollTrigger.create({
    animation: section04,
    trigger: ".section_04",
    start: "top top ",
    end: "+=3000",
    scrub: 2,
    //markers: true,
    pin: true,
});


//5번째
const section05 = gsap.timeline();

section05.from(".trailer_text", {
    scale: 1.3,
    duration: 1,
    opacity: 0,
}).to(".trailer_text", {
    opacity: 0,
    duration: 2,
}).from(".video_01", {
    opacity: 0,
    duration: 10,
}) 

ScrollTrigger.create({
    animation: section05,
    trigger: ".section_05",
    start: "top top ",
    end: "+=2000",
    scrub: 2,
    //markers: true,
    pin: true,
});


//6번째
const section06 = gsap.timeline();

section06.to(".famous_img01", {
    duration: 1,
    opacity: 1,
}).to(".famous_text01", {
    duration: 1,
    opacity: 1,
}, "<").to(".famous_img01", {
    duration: 1,
    opacity: 0,
}).to(".famous_text01", {
    duration: 1,
    opacity: 0,
}, "<").to(".famous_img02", {
    duration: 1,
    opacity: 1,
}).to(".famous_text02", {
    duration: 1,
    opacity: 1,
}, "<").to(".famous_img02", {
    duration: 1,
    opacity: 0,
}).to(".famous_text02", {
    duration: 1,
    opacity: 0,
}, "<").to(".famous_img03", {
    duration: 1,
    opacity: 1,
}).to(".famous_text03", {
    duration: 1,
    opacity: 1,
}, "<").to(".famous_img03", {
    duration: 1,
    opacity: 0,
}).to(".famous_text03", {
    duration: 1,
    opacity: 0,
}, "<")

ScrollTrigger.create({
    animation: section06,
    trigger: ".section_06",
    start: "top top ",
    end: "+=3000",
    scrub: 2,
    //markers: true,
    pin: true,
});


//7번째
const section07 = gsap.timeline();

section07.from(".last_img1", {
    x: -500,
    duration: 10,
    opacity: 0,
}).from(".last_img3", {
    duration: 10,
    opacity: 0,
    x: 1000,
}).from(".last_img2", {
    duration: 10,
    opacity: 0,
    y: 1000,
})

ScrollTrigger.create({
    animation: section07,
    trigger: ".section_07",
    start: "top top ",
    end: "+=3000",
    scrub: 2,
    //markers: true,
    pin: true,
});