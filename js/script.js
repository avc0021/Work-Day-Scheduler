// Current date moment object
var current = moment().format('MMMM Do YYYY');
var saveButtonEl = document.querySelector ("#save")

// Displays date on page
var displayCurrent = document.getElementById('currentDay');
currentDay.innerHTML = current;

//function savebtn () {
    //alert('saved!');
    //localStorage.setItem
//}



$(".saveBtn").click(function(event) {
    event.preventDefault();
    var textInput = $(this).siblings(".description").val();
    console.log(textInput);
    localStorage.setItem("1", textInput)
}

)

