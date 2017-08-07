$(document).ready(function() {
  var segmentation = $('.segmentation').find('.section');
  segmentation.on('mouseenter', function () {
    $(this).find(".icon").css("background-color","#363636");
    $(this).find("button").css("background-color","#363636");
    $(this).find(".button-line").css("border-color","#363636");
    $(this).find("h2").css("color","#363636");
    $(this).find(".headline-border").css("border-color","#363636");

  });
  segmentation.on('mouseleave', function () {
    $(this).find(".icon").css("background-color","#057091");
    $(this).find("button").css("background-color","#057091");
    $(this).find(".button-line").css("border-color","#057091");
    $(this).find("h2").css("color","#057091");
    $(this).find(".headline-border").css("border-color","#057091");
  });
});
