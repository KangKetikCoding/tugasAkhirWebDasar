// Get Current date day of week
var d = new Date().toLocaleString('en-us', {  weekday: 'long' });
// Show the date into navbar by id
document.getElementById('time').innerHTML = "Today is " + d;
// Responsive navbar
hamburger = document.querySelector('.hamburger');
hamburger.onclick = function(){
    navBar= document.querySelector('.nav-link');
    navBar.classList.toggle('active');
    toggle = document.querySelector('.hamburger');
    toggle.classList.toggle('active');
}