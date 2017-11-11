

function navFunction() {
    var navigation = document.getElementById("nav");
    if (navigation.className === "topnav") {
        navigation.className += " responsive";
    }
    else {
        navigation.className = "topnav";
    }
}