let currentTitleIndex = 0;
let currentLetter = 0;
const titles = [
    'a programmer.',
    'a learner.',
    'an inquirer.',
    'a human.'
];
const typingFunction = () => {
    let currentTitle = titles[currentTitleIndex];
    if (currentLetter + 1 < currentTitle.length) {
        currentLetter++;
        document.querySelector('#titleText').innerHTML = titles[currentTitleIndex].substring(0, currentLetter + 1);
        setTimeout(typingFunction, 200);
    }
    else {
        currentLetter = 0;
        if (currentTitleIndex < titles.length - 1) {
            currentTitleIndex++
        }
        else {
            currentTitleIndex = 0;
        }
        setTimeout(typingFunction, 800);
    }
};
typingFunction();



document.body.onscroll = event => {
    let menuElem = document.querySelector('#menu');
    if (document.body.scrollTop >= (document.body.clientHeight - menuElem.offsetHeight)) {
        menuElem.classList.add('floating-menu')
    }
    else {
        menuElem.classList.remove('floating-menu')
    }
};