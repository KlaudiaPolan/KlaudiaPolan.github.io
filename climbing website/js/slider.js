$(document).ready(function() {
  var items = $('.carousel item');
  var photos = $('.carousel-photo img');
  var slide = 0;
  console.log(items.length);
  for (var i = 1; i < items.length; i++) {
    items.eq(i).css('margin-top', '200%');
    photos.eq(i).css('margin-left', '100%');
  }
  $('.arrow-left').on('click', function() {
    if (slide > 0) {
      items.eq(slide).css('margin-top', '200%');
      photos.eq(slide).css('margin-left', '100%');

      items.eq(slide - 1).css('margin-top', '0%');
      photos.eq(slide - 1).css('margin-left', '0%');
      slide--;
      console.log(slide);
    }
  });
  $('.arrow-right').on('click', function() {
    console.log(slide);
    if (slide < items.length - 1) {
      items.eq(slide).css('margin-top', '200%');
      photos.eq(slide).css('margin-left', '100%');

      items.eq(slide + 1).css('margin-top', '0%');
      photos.eq(slide + 1).css('margin-left', '0%');
      slide++;
      console.log(slide);
    }
  });
});
