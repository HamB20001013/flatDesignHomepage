// window.onload = function() {
//   let menuToggleBtn = document.querySelector(".menu_toggle_btn");
//   let gnb = document.querySelector(".gnb");

//   menuToggleBtn.addEventListener("click", function() {
//     // if(gnb.style.display === "none") {
//     //   gnb.style.display = "block";
//     // }
//     // else {
//     //   gnb.style.display = "none";
//     // }

//     // gnb.style.display === "none" ? gnb.style.display = "block" : gnb.style.display = "none";
//     gnb.style.display = gnb.style.display === "none" ? "block" : "none";
//   });
// };

jQuery(function($){
  $(".menu_toggle_btn").click(function(){
    $(".gnb").stop().slideToggle('fast');
  })
})