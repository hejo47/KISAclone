// fullpage
$(function () {
  $("#fullpage").fullpage({
    menu: ".header.pc",
    anchors: ["main", "business", "news", "footer"],
    sectionSelector: ".section",
    slideNavigation: true,
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["01 Main", "02 Business", "03 News"],
    responsiveWidth: 1600,
    keyboardScrolling: true,
    animateAnchor: false,
    css3: true,
    sectionsColor: ["#FFF", "#000"],
    afterLoad: function (origin, dest, dir) {
      if (dest.index > 1) {
        headerActive();
        $(".fp-tooltip").css("color", "#000");
        $("#fp-nav ul li a span").addClass("importantBlack");
      } else {
        headerNonActive();
        $(".fp-tooltip").css("color", "#FFF");
        $("#fp-nav ul li a span").removeClass("importantBlack");
      }
    },
  });
});
