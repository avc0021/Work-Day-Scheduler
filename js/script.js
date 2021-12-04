// Current date moment object
var current = moment().format('MMMM Do YYYY');
var saveButtonEl = document.querySelector ("#save")

//Array to hold events put in by user
var scheduledItems = [];

// Displays date on page
var displayCurrent = document.getElementById('currentDay');
currentDay.innerHTML = current;

// Upon click it will open text box to edit
$(".saveBtn").click(function(event) {
    event.preventDefault();
    var textInput = $(this).siblings("description","hour-1").val();
 
    localStorage.setItem("hour-1", textInput);
});



var obtainIteam = localStorage.getItem("saveItem");