// CHANGE MODE

function changeMode() {

    // Univesal variable scope
    var body = document.body;
    var navbar = document.getElementsByClassName("navbar")[0];
    var contact = document.getElementsByClassName("contact")[0];
    var listMenu = document.getElementById("list-item");
    var projectImages = document.getElementsByClassName("project-image-container");
    var navLinks = document.getElementsByClassName("nav-link");


    // Function Light Mode Style
    function ligthModeStyle() {
        body.style.backgroundColor = "#fff";
        body.style.color = "black";
        navbar.style.backgroundColor = "#fff";
        listMenu.style.backgroundColor = "rgba(255, 255, 255, .9)";
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
        listMenu.style.backgroundColor = "rgba(33, 33, 33, 0.9)";
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




// SHOW NAVBAR MENU

function showNavMenu() {
    let navButton = document.getElementById("nav-button");
    let listItem = document.getElementById("list-item")
    let menuIcon = document.getElementsByClassName("menu-icon")[0];
    let closeIcon = document.getElementsByClassName("close-icon")[0];


    menuIcon.classList.toggle("show-bar");
    closeIcon.classList.toggle("show-bar");
    listItem.classList.toggle("show-bar");
}




function scrollAnimation() {
    let position = window.pageYOffset;
    let projectContent = document.getElementsByClassName("project-content");
    let contact = document.getElementById("contact");
    let footer = document.getElementsByTagName("footer")[0];
    const elements = [...projectContent, contact];


    // Animation For Desctop
    elements.forEach(element => {
        if (position >= element.offsetTop - 500) {
            element.style.animation = "fadeInOut 1.5s ease-out forwards"
        }
    });

    if (position >= contact.offsetTop - 500) {
        footer.style.animation = "fadeInOut 1.5s ease-out forwards"
    }


}
