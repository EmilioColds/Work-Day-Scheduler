// Created the JQuery variables with ID's, classes and specific values after all of the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  var currentDate = $('#currentDay');
  var startHour = 9;
  var endHour = 17;
  var hourContainer = $('.container-lg');

  // Created a variable and function to cycle each hour between 9AM - 5PM, give them the correct styling depending of the current hour and append it to the HTML
    var generateTimeBlocks = () => {
      var currentHour = dayjs().hour();
    
      for (let hour = startHour; hour <= endHour; hour++) {
        var displayHour = dayjs().set('hour', hour).format('hA');
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

    // Added this function to retrieve, show and position the correct events written by the user at the time blocks
    var loadEvents = () => {
      for (let hour = startHour; hour <= endHour; hour++) {
        var eventText = localStorage.getItem(`hour-${hour}`) || "";
        $(`#hour-${hour} .description`).val(eventText);
      };
    };

    // Added the current date with DayJS API to the "currentDay" ID so that it shows at the header of the page
    $(function () {
      currentDate = dayjs();
      $('#currentDay').text(currentDate.format('dddd, MMMM D'));
      generateTimeBlocks();
      loadEvents();

    // Added the event listener to the save buttons and set the items that will be stored via localStorage
    $(document).on('click', '.saveBtn', function() {
      var blockHour = $(this).parent().attr('id');
      var eventText = $(this).siblings('.description').val();
      localStorage.setItem(blockHour, eventText);
    });
  });
});