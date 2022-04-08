define(["jquery"], function ($) {
  "use strict";

  let pageInit = false;

  return function (config) {
    $(document).ready(function () {
      if (pageInit) {
        return;
      }
      pageInit = true;

      $(
        `<div class="quantity-nav">
          <button type="button" class="quantity-button quantity-up"></button>
          <button type="button" class="quantity-button quantity-down"></button>
        </div>`
      ).insertAfter(".input-text.qty");

      const parent = config.parent
        ? config.parent
        : ".box-tocart .control";

      $(parent).each(function () {
        var spinner = $(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find(".quantity-up"),
          btnDown = spinner.find(".quantity-down"),
          min = input.attr("min"),
          max = input.attr("max");

        btnUp.click(function () {
          var oldValue = parseFloat(input.val());
          if (oldValue >= max) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue + 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
          var oldValue = parseFloat(input.val());
          if (oldValue <= min) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue - 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });
      });
    });
  };
});
