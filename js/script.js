window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("nav").className = "solid-nav"
    }
    else {
        document.getElementById("nav").className = "clear-nav";
    }
}