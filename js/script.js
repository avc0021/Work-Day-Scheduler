// Current date moment object
var current = moment().format('MMMM Do YYYY');
var saveButtonEl = document.querySelector ("#save")

//Array to hold events put in by user
var scheduledItems = [];

// Displays date on page
var displayCurrent = document.getElementById('currentDay');
currentDay.innerHTML = current;

// Upon click it will open text box to edit
$(".btn-saveBtn").click(function(event) {
    event.preventDefault();
    var textInput = $(this).siblings('hour-1', 'description').val();
// Save hour and text submitted
    localStorage.setItem("hour-1", textInput);
});


// Pull saved info from local storage
var obtainIteam = localStorage.getItem("saveItem");

// Conditional statement to determine what color to display based on time