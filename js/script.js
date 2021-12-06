// Current date moment object
var current = moment().format('MMMM Do YYYY');
var saveButtonEl = document.querySelector("#save");
// Displays date on page
var displayCurrent = document.getElementById('currentDay');
displayCurrent.innerHTML = current;

//Array to hold events put in by user
var scheduledItems = [];


// Upon click it will open text box to edit
$(".saveBtn").click(function(event) {
    console.log("hello2");
    event.preventDefault();
    var timeSlot = $(this).siblings('hour').val();
    console.log($(this));
    var timeSlotDescription = $(this).siblings('description').val();
    console.log(timeSlot);
    console.log(timeSlotDescription);
    // Save hour
    localStorage.setItem(hour, timeSlot);
    // Save text submit
    localStorage.setItem(text, description);
});


// Pull saved info from local storage
//var obtainIteam = localStorage.getItem("saveItem");

// Conditional statement to determine what color to display based on time