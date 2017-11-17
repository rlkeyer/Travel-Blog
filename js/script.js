///////////////////////////////////////////
// MOBILE MENU BUTTON
///////////////////////////////////////////

function navFunction() {
    var navigation = document.getElementById("nav");
    if (navigation.className === "topnav") {
        navigation.className += " responsive";
    }
    else {
        navigation.className = "topnav";
    }
}

///////////////////////////////////////////
// SMOOTH SCROLLING
///////////////////////////////////////////

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Adding smooth scrolling with animate
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });
});

///////////////////////////////////////////
// CHANGE FORM BUTTON ON CLICK
///////////////////////////////////////////

$(document).ready(function() {
    $('#submit').on('click', function(event) {
        // Prevent default behavior from occuring after click
        event.preventDefault();
        // If Submit button reads 'Submit', change the text
        if ($('#submit').val() === 'Submit') {
            $('#submit').val('Thank You!');
        }
        else {
            $('#submit').val('Submit');          
        }
    });
});

///////////////////////////////////////////
// STOP ANCHOR LINKS FROM ADDING A HASH TO URL
///////////////////////////////////////////

$(document).ready(function() {
    $('a').on('click', function(event) {
        event.preventDefault();
    });
});