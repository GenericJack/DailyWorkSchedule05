  ````// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
//Add a listener for click events on the save button
$(".saveBtn").on("click", function () {

  // get user input from text area
  var description = $(this).siblings(".description").val();

  // get hour from time-block id (ex, "hour-9 => "9")
  var hour = $(this).parent().attr("id").split("-")[1];

  // save user input in loacl storage using the hour as the key
  localStorage.setItem("hour-" + hour, description);

  });

  // get current hour in 24 - hour format using Day.js
  var currentHour = dayjs().format("H");

  // loop through each time-block and compare with current hour
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      // past
      $(this).addClass("past").removeClass("present future");
    } else if (blockHour === currentHour) {
      // present time
      $(this).addClass("present").removeClass("past future");
    } else {
      // future
      $(this).addClass("future").removeClass("past present");

    }
});

// get user input from localStorage and set textarea values
$(".time-block").each(function (){
  var blockHour = $(this).attr("id").split("-")[1];
  var savedDescription = localStorage.getItem("hour-" + blockHour);
  $(this).find(".description").val(savedDescription);
});

$(function () {
  var currentDate = dayjs().format("MMMM D,YYYY");
  // set current date in header
  $("#currentDay").text("Today is " + currentDate);
});

});
