    const layerMountain = document.querySelector(".layer-mountain");
    const layerBeach = document.querySelector(".layer-beach");
    const seeMore = document.querySelector(".see-more");


      function focusOnRight() {
        layerMountain.style.width = "21%";
        layerMountain.style.filter = "blur(20px)";
        layerMountain.style.transform = "scale(1.2)";
        layerMountain.style.zIndex = "18";
        layerBeach.style.zIndex = "17";
        layerBeach.style.width = "80%";
        layerBeach.style.filter = "blur(0px)";
        seeMore.style.display = "none";
        seeMore.style.transition = "0.9s";
      }

      function focusOnLeft() {
        layerBeach.style.width = "21%";
        layerBeach.style.filter = "blur(20px)";
        layerBeach.style.transform = "scale(1.2)";
        layerMountain.style.zIndex = "17";
        layerBeach.style.zIndex = "18";
        layerMountain.style.width = "80%";
        layerMountain.style.filter = "blur(0px)";
        seeMore.style.display = "inherit";
        seeMore.style.transition = "0.9s";
      }

      $(window).bind('scroll', function() {
 if ($(window).scrollTop() > 4420) { 
     $('.beach-main-text').show();
 }

 if ($(window).scrollTop() > 4200) {
    $('.beach-sc-text').show();
 }
 
 if ($(window).scrollTop() < 4420) {
    $('.beach-main-text').hide();
 }

  if ($(window).scrollTop() < 4200) {
    $('.beach-sc-text').hide();
 }
});