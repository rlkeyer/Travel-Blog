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

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

///////////////////////////////////////////
// SMOOTH SCROLLING
///////////////////////////////////////////

$(document).ready(function() {
    $('#submit').on('click', function() {
        event.preventDefault();
        if ($('#submit').val() === 'Submit') {
            $('#submit').val('Thank You!');
        }
        else {
            $('#submit').val('Submit');          
        }
    })
})