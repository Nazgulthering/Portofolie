'use strict';

/* Creating the variables of the document */
const btnHome = document.getElementById('home');
const btnAbout = document.getElementById('about');
const btnServices = document.getElementById('services');
const btnContact = document.getElementById('contact');
const btns = document.getElementsByClassName('meny-knapper');
const copyright = document.getElementById('copyright');


/* Creating the function to remove which anchor point you are at. */
function setBtnsInactive() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('color-primary')
    }
}

/* /* Adding copyright tekst 
copyright.textContent = `copyright © Utviklet av - MOWU ENK ${"2021 - " + new Date().getFullYear()}` */


/* Before the script loads the page loads first */
window.onload = function() {

    /* Creating the button functions and adding a class to make sure you know wich anchor point u are at */
    btnHome.addEventListener('click', function() {
        console.log(btnHome, ('click'));
        setBtnsInactive();
        this.classList.add('color-primary');

    });

    btnAbout.addEventListener('click', function() {
        console.log(btnAbout, 'click');
        setBtnsInactive();
        this.classList.add('color-primary');
    });

    btnServices.addEventListener('click', function() {
        console.log(btnServices, 'click');
        setBtnsInactive();
        this.classList.add('color-primary');
    });

    btnContact.addEventListener('click', function() {
        console.log(btnContact, 'click');
        setBtnsInactive();
        this.classList.add('color-primary');
    });
};