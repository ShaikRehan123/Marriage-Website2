$(window).on("load", function () {
  // console.log('hi');
  // ! Home Section SlideShow
  let slideIndex = $(".slide.active").index();
  const slideLen = $(".slide").length;
//   console.log(slideLen);
  const slideShow = () => {
    $(".slide").removeClass("active").eq(slideIndex).addClass("active");
    console.log(slideIndex);
    if (slideIndex == slideLen - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    setTimeout(slideShow, 5000);
  };
  slideShow();
});
