$(".photo-grid img").on("load", function() {
  $(this).parent().css({
    "height": "auto",
    "padding": 0
  }).find("img").addClass("loaded");
});