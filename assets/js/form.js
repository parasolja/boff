$(document).ready(function() {
    $(document).on("click", "button", function() {
      var _this = this;
      $(this).css("width", "350px");
      setTimeout(function() {
        $(_this).css("opacity", 0);
        setTimeout(function() {
          $("div")
            .show()
            .css("opacity", 1);
        }, 300);
      }, 300);
    });
    $(document).on("submit", "form", function() {
      $("input, #submit").css("opacity", 0);
      setTimeout(function() {
        $("input, #submit").hide();
        $("p").show();
        setTimeout(function() {
          $("p").css("opacity", 1);
          $("div").css("border-color", "green");
        }, 1);
      }, 300);
      return false;
    });
  });