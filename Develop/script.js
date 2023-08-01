  ````// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
//Add a listener for click events on the save button
$(".saveBtn").on("click", function (){

  // get user input from text area
  var description = $(this).siblings(".description").val();

  // get hour from time-block id (ex, "hour-9 => "9")
  var hour = $(this).parent().attr("id").split("-")[1];

  // save user input in loacl storage using the hour as the key
  localStorage.setItem("hour-" + hour, description);

})
});
