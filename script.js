const toggleButton = document.getElementsByClassName('navbarToggle')[0];
const navbarLinks = document.getElementsByClassName('navbarLinks');

const showCodeButtonOne = document.getElementById('showCodeProjectOne');
const codeSpanOne = document.getElementById('projectOneCode');

const showCodeButtonOnePointFive = document.getElementById('showCodeProjectOnePointFive');
const codeSpanOnePointFive = document.getElementById('projectOnePointFiveCode');

const showCodeButtonTwo = document.getElementById('showCodeProjectTwo');
const codeSpanTwo = document.getElementById('projectTwoCode');

const showCodeButtonThree = document.getElementById('showCodeProjectThree');
const codeSpanThree = document.getElementById('projectThreeCode');

const showCodeButtonFour = document.getElementById('showCodeProjectFour');
const codeSpanFour = document.getElementById('projectFourCode');


toggleButton.addEventListener('click', function() {
    for(let i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active');
})

showCodeButtonOne.addEventListener('click', () => {
    if (codeSpanOne.className == "projectOneCodeAfterClick"){
        codeSpanOne.className = "projectOneCode";
    }else{
    codeSpanOne.className = "projectOneCodeAfterClick";
    }
})

showCodeButtonOnePointFive.addEventListener('click', () => {
    if (codeSpanOnePointFive.className == "projectOnePointFiveCodeAfterClick"){
        codeSpanOnePointFive.className = "projectOnePointFiveCode";
    }else{
    codeSpanOnePointFive.className = "projectOnePointFiveCodeAfterClick";
    }
})

showCodeButtonTwo.addEventListener('click', () => {
    if (codeSpanTwo.className == "projectTwoCodeAfterClick"){
        codeSpanTwo.className = "projectTwoCode";
    }else{
    codeSpanTwo.className = "projectTwoCodeAfterClick";
    }
})


showCodeButtonThree.addEventListener('click', () => {
    if (codeSpanThree.className == "projectThreeCodeAfterClick"){
        codeSpanThree.className = "projectThreeCode";
    }else{
    codeSpanThree.className = "projectThreeCodeAfterClick";
    }
})

showCodeButtonFour.addEventListener('click', () => {
    if (codeSpanFour.className == "projectFourCodeAfterClick"){
        codeSpanFour.className = "projectFourCode";
    }else{
    codeSpanFour.className = "projectFourCodeAfterClick";
    }
})



