$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".mobile-menu").addClass("is-open");
  });
});

$(document).ready(function () {
  $(".modal-button").click(function () {
    $(".mobile-menu").removeClass("is-open");
  });
});

$(document).ready(function () {
  $(".hero-button").click(function () {
    $(".container-modal").addClass("is-open");
  });
});

$(document).ready(function () {
  $(".modal-button").click(function () {
    $(".container-modal").removeClass("is-open");
  });
});
