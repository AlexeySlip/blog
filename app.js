let btnSendMessage = document.querySelector(".btn-send")
let modal = document.querySelector(".modal")
let btnClose = document.querySelector(".btn-close")
console.log(btnSendMessage)
console.log(modal)
console.log(btnClose)

btnSendMessage.addEventListener("click",openModal);

btnClose.addEventListener("click",closeModal);

function openModal(){
    modal.classList.remove("hide");
    modal.classList.add("show");
    }

function closeModal(){
    modal.classList.remove("show");
    modal.classList.add("hide");
    }
modal.addEventListener("click", function(e){
    if (e.target === modal) {
    closeModal()
    }})

    // slider
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation")

mobileMenu.addEventListener("click",function(){
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu")
  } else{
    mainMenu.classList.remove("active-menu")
  }
}
)