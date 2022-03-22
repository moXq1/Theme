define(["jquery", "matchMedia"], function ($, mediaCheck) {
  "use strict";

  return function () {
    let prev = null;

    mediaCheck({
      media: "(min-width:768px)",
      entry: function () {},
      exit: function () {
        if (!prev) {
          prev = document.querySelector(".modes-mode.active").dataset.value;
        }
        $(".mode-grid").click();
      },
    });
  };
});
