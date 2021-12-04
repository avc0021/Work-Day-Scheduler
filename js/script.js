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
    var textInput = $(this).siblings(".description").val();
    console.log(textInput);
    saveItem();
});

var saveItem= function() {
localStorage.setItem("scheduledItems", JSON.stringify(scheduledItems));
};

var obtainIteam = localStorage.getItem("scheduledItems");