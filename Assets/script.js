// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
document.addEventListener("DOMContentLoaded", () => {
  var currentDate = $('#currentDay');
  var startHour = 9;
  var endHour = 17;
  var hourContainer = $('.container-lg');

  $(function () {
    currentDate = dayjs();
    $('#currentDay').text(currentDate.format('dddd, MMMM D'));

    var generateTimeBlocks = () => {
      var currentHour = dayjs().hour();
    
      for (let hour = startHour; hour <= endHour; hour++) {
        var displayHour = dayjs().hour().format('hA');
        var timeBlock = $(`<div id="hour-${hour}" class="row time-block"></div>`);
    
        if (hour < currentHour) {
          timeBlock.addClass("past");
        } else if (hour === currentHour) {
          timeBlock.addClass("present");
        } else {
          timeBlock.addClass("future");
        }
    
        timeBlock.append(`<div class="col-2 col-md-1 hour text-center py-3">${displayHour}</div>`);
        timeBlock.append(`<textarea class="col-8 col-md-10 description" rows="3"></textarea>`);
        timeBlock.append(`<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>`);
        hourContainer.append(timeBlock);
      }
    };

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  });
});