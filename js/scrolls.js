// // chance fade-in

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: ".singlechance12",
    triggerHook: 0.7,
  })
    .setClassToggle(".singlechance12", "fade-in")
    .addTo(controller);
});
$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: ".singlechance34",
    duration: "150%",
    triggerHook: 0.7,
  })
    .setClassToggle(".singlechance34", "fade-in")
    .addTo(controller);
});

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: ".possiblesection",
    duration: "150%",
    triggerHook: 0.5,
  })
    .setClassToggle(".possiblediv", "pos-fade")
    .addTo(controller);
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "center center",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
  })
  .from(".newsletters", { x: innerWidth * 2 });
