//menu pop up on click burger : cross + navigation active----------------
burger=$(".burger");
menu=$(".navigation");
burger.click(function() {
    $(burger).toggleClass("active");
    $(menu).toggleClass("active");
    $("body").toggleClass("active");
});
//click-menu-linken : close pop-up + close cross + close no-scroll (body)
//menuItems=$(".navigation a");
menu.click(function(){
    $(burger).removeClass("active");
    $(menu).removeClass("active");
    $("body").removeClass("active");
});

//navigation position fixed on scroll----------------------------------

let bodyTop=$("body").offset().top;
let banner=$(".bannerWrapper").offset().top;

$(window).scroll(function(){
    let scrolled=$(window).scrollTop();

    if (scrolled > bodyTop +100){
        $(".bannerWrapper").addClass("active");
    }
    if (scrolled < bodyTop +100){
        $(".bannerWrapper").removeClass("active");
    }

})


//homepage : Forms tabs-------------------------------------------------
let lis= document.querySelectorAll(".ulTabs>li");
lis.forEach((li) => {
    li.addEventListener("click", switchActiveLi);   
});
//Fonction when click on li : 
//1) active on click and off the rest
//2) compair data-set type of a and project and show (add 'show') 
function switchActiveLi(ev){
    let clickedLi = ev.currentTarget;
    let activeLi=document.querySelector(".ulTabs>li.active");
    if (activeLi !== null){
        activeLi.classList.remove("active");
    }
    clickedLi.classList.add("active");

    let a = clickedLi.querySelector("a");
    let allForms=document.querySelectorAll (".inputWrap");
    allForms.forEach((inputWrap) => {
        if(inputWrap.dataset.type === a.dataset.type || a.dataset.type === '') {
            inputWrap.classList.add("show");
        
    } else {
        inputWrap.classList.remove("show");
        }
    });
}

//swiper


  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });