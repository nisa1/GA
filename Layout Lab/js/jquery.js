$(document).ready(function() {
  $(".readmore").click(readMore);
  $(".readless").click(readLess);
  $(".learnmore").click(learnMore);

  function readMore() {
    event.preventDefault();
    $("#show-this-on-click").slideDown();
    $(".readmore").hide();
    $(".readless").show();
  }

  function readLess() {
    event.preventDefault();
    $("#show-this-on-click").slideUp();
    $(".readless").hide();
    $(".readmore").show();    
  }

  function learnMore() {
    event.preventDefault();
    $("#learnmoretext").slideDown();
    $(".learnmore").hide();
    $(".readless").show;
  }

});