const toggleButton = document.getElementsByClassName('navbarToggle')[0];
const navbarLinks = document.getElementsByClassName('navbarLinks');

toggleButton.addEventListener('click', function() {
    for(let i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active');
})