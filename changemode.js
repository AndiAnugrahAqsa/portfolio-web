function changeMode() {

    // Univesal variable scope
    var body = document.body;
    var navbar = document.getElementsByClassName("navbar")[0];
    var contact = document.getElementsByClassName("contact")[0];
    var projectImages = document.getElementsByClassName("project-image-container");
    var navLinks = document.getElementsByClassName("nav-link");


    // Function Light Mode Style
    function ligthModeStyle() {
        body.style.backgroundColor = "#fff";
        body.style.color = "black";
        navbar.style.backgroundColor = "#fff";
        contact.style.backgroundColor = "rgb(180, 0, 0)";
        contact.style.color = "#fff";
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "red";
        };
        for (var i = 0; i < projectImages.length; i++) {
            projectImages[i].style.boxShadow = "0 0 20px 1px black";
        };
    }

    function darkModeStyle() {
        body.style.backgroundColor = "rgb(33, 33, 33)";
        body.style.color = "rgb(216, 216, 216)";
        navbar.style.backgroundColor = "rgb(33, 33, 33)";
        contact.style.backgroundColor = "#0F0F0F";
        contact.style.color = "rgb(216, 216, 216)";
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "rgb(216, 216, 216)";
        };
        for (var i = 0; i < projectImages.length; i++) {
            projectImages[i].style.boxShadow = "0 0 50px 10px black";
        };
    }


    let checkedinput = document.getElementById("change-mode")
    if (checkedinput.checked) {
        ligthModeStyle()
    } else {
        darkModeStyle()
    }
}