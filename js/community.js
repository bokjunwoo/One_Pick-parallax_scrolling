const headerMenu = document.querySelector(".header_menu");
const headerOpened = document.querySelector(".header_opened");

headerMenu.addEventListener("click", function(){
  if(headerOpened.style.display === "none"){
  headerOpened.style.display = "flex"
  }else{
    headerOpened.style.display = "none"
  }
})