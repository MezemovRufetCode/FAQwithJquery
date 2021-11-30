$(document).ready(function () {
  $(".FAQ .mylist .questions .answer").hide();
  $(".Quest").click(function () {
    $(this).first().toggleClass("black blue");
    $(this).find(".Icon").toggleClass("zerodeg udeg");
    $(this).next(".answer").slideToggle(200);
  });
});
