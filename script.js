function openMenu(){
    var nav_ul_list = document.getElementById("nav_ul_list");
    var nav__Toggle = document.querySelector(".nav__toggle");
    nav_ul_list.classList.toggle("active");
    nav__Toggle.classList.toggle("open");
}