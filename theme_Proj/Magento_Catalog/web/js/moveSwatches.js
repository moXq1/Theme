define(["jquery", "ko"], function ($, ko) {
  "use strict";

  return function () {
    const colorSwatch = document.querySelector("#product-options-wrapper");
    let swatchHeight;
    const descriptionBeforeSwatch = document.querySelector(".product-contact");
    const wrap = document.querySelector("#page-product");
    const viewModel = {};

    let descriptionBound;

    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        swatchHeight = colorSwatch.getBoundingClientRect().height;
        document.querySelector(".product-contact").style.paddingTop =
          swatchHeight + "px";
        resolve();
      }, 200);
    });

    promise1.then(() => {
      descriptionBound = descriptionBeforeSwatch.getBoundingClientRect();
      console.log(descriptionBound.top + " -1  " + window.pageYOffset);
      viewModel.x = ko.observable(descriptionBound.left + window.pageXOffset);
      viewModel.y = ko.observable(descriptionBound.top + window.pageYOffset);
      console.log(swatchHeight + " " + viewModel.y());
      colorSwatch.style.position = "absolute";

      const resize_ob = new ResizeObserver(function (entries) {
        descriptionBound = descriptionBeforeSwatch.getBoundingClientRect();

        console.log(descriptionBound.top + " - 2 " + window.pageYOffset);
        viewModel.y(descriptionBound.top + window.pageYOffset);
        viewModel.x(descriptionBound.left + window.pageXOffset);
        colorSwatch.style.left = viewModel.x() + 20 + "px";
        colorSwatch.style.top =
          viewModel.y() - swatchHeight / 2 + swatchHeight / 3 + "px";
      });

      // start observing for resize
      resize_ob.observe(wrap);
    });
  };
});
