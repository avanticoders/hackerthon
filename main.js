function open_menu() {
    document.getElementById('side-menu').style.width = "100vw";
}

function close_menu() {
    document.getElementById('side-menu').style.width = "0";
}

function open_sign_popup() {
    document.getElementById('sign-popup').style.opacity = 1;
    document.getElementById('sign-popup').style.display = "block";
    close_menu();
}

function close_sign_popup(){
    document.getElementById('sign-popup').style.opacity = 0;
    document.getElementById('sign-popup').style.display = "none";
}