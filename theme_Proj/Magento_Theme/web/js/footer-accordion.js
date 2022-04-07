define(["jquery", "matchMedia", "accordion", "collapsible"], function (
  $,
  mediaCheck,
  accordion,
  collapsible
) {
  "use strict";
  return function () {
    mediaCheck({
      media: "(min-width:767px)",
      entry: function () {
        if ($("#ff div[data-collapsible]").length !== 0) {
          $("#ff").accordion("activate");
          $("#ff").accordion("destroy");
        }
      },
      exit: function () {
        $("#ff").accordion({
          active: [0],
          collapsible: true,
          openedState: "active",
          multipleCollapsible: true,
        });
      },
    });
  };
});
