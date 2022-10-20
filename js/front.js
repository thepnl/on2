// $(function(){
//   Headerfixed();
//
// function Headerfixed() {
//   var menu = $("header").offset();
//   $(window).scroll(function () {
//     if ($(document).scrollTop() > menu.top) {
//       $("header").addClass("fixed");
//     } else {
//       $("header").removeClass("fixed");
//     }
//   });
// }
// });

$(document).ready(function(){
  // resize 이벤트가 발생할때마다 사이즈를 조절합니다.
  $(window).resize(resizeContents);
  // 처음 페이지가 뜰때 사이즈 조정 부분 입니다.
  resizeContents();
});



// 메뉴와 컨텐츠의 높이를 윈도우 높이에서 헤더 부분을 뺀 크기로 지정합니다.

function resizeContents() {
  $("#wrap").height($(window).height()-80);
  //$("#contents").height($(window).height()-50);

}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
}

// //mySidepanel 사이드메뉴
// function openNav() {
//   document.getElementById("mySidepanel").style.width = "100%";
// }

// /* Set the width of the sidebar to 0 (hide it) */
// function closeNav() {
//   document.getElementById("mySidepanel").style.width = "0";
// }

function openNav() {
  var element = document.getElementById("mySidepanel");
  var element2 = document.getElementById("left-menu");
  $("#mySidepanel").css("z-index", 200);
  element.classList.add("on");
  element2.classList.add("on");
}

//mySidepanel 사이드메뉴

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  var element = document.getElementById("mySidepanel");
  var element2 = document.getElementById("left-menu");
  element.classList.remove("on");
  element2.classList.remove("on");
  setTimeout(function () {
    $("#mySidepanel").css("z-index", -1);
  }, 100);
  //var element1 = (document.style.display = "none");
}



//실시간이슈키워드

function openKey() {
  document.getElementById("openKeyCont").classList.toggle("show");
  document.getElementById("openKeyBtn").classList.toggle("up");;
  document.getElementById("keyTitle").classList.toggle("up");
  
  
}

function closeKey() {
  document.getElementById("openKeyCont").classList.toggle("show");
  document.getElementById("openKeyBtn").classList.toggle("up");;
  document.getElementById("keyTitle").classList.toggle("up");
  
}

