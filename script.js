const heartrate_lower_threshold = 60;
const heartrate_upper_threshold = 135;
const accelerometer_threshold = 8;
const body_temperature_lower_threshold = 33;
const body_temperature_upper_threshold = 44;
const temperature_lower_threshold = 15;
const temperature_upper_threshold = 47;
const smoke_threshold = 1000;

$(document).ready(function () {
  loadContent("./pages/dashboard.html");

  $("#set-thresholds").click(function (event) {
    event.preventDefault();
    loadContent("./pages/form.html");
  });

  $("#option1").click(function (event) {
    event.preventDefault();
    loadContent("./pages/dashboard.html");
  });

  $("#option2").click(function (event) {
    event.preventDefault();
    loadContent("./pages/surrounding_temp.html");
  });

  $("#option3").click(function (event) {
    event.preventDefault();
    loadContent("./pages/body_temp.html");
  });

  $("#option4").click(function (event) {
    event.preventDefault();
    loadContent("./pages/heart_rate.html");
  });

  $("#option5").click(function (event) {
    event.preventDefault();
    loadContent("./pages/smoke.html");
  });

  $(".search-miner").click(function (event) {
    event.preventDefault();
    loadContent("./pages/miner_profile.html");
  });

});

function loadContent(url) {
  $.ajax({
    url: url,
    type: "GET",
    success: function (data) {
      $("#content-container").html(data);
    },
    error: function () {
      console.log("Error loading content");
    },
  });
}