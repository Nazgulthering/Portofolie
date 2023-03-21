'use strict';

/* Creating the variables of the document */
const btnVelkommen = document.getElementById('velkommen');
const btnOmOss = document.getElementById('om-oss');
const btnVåreTjenester = document.getElementById('våre-tjenester');
const btnKontaktOss = document.getElementById('kontakt-oss');
const btns = document.getElementsByClassName('meny-knapper');
const copyright = document.getElementById('copyright');


/* Creating the function to remove which anchor point you are at. */
function setBtnsInactive() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active')
    }
}

/* Adding copyright tekst */
copyright.textContent = `copyright © Utviklet av - MOWU ENK ${"2021 - " + new Date().getFullYear()}`


/* Before the script loads the page loads first */
window.onload = function() {

    /* Creating the button functions and adding a class to make sure you know wich anchor point u are at */
    btnVelkommen.addEventListener('click', function() {
        console.log(btnVelkommen, ('click'));
        setBtnsInactive();
        this.classList.add('active');

    });

    btnOmOss.addEventListener('click', function() {
        console.log(btnOmOss, 'click');
        setBtnsInactive();
        this.classList.add('active');
    });

    /*     btnVåreTjenester.addEventListener('click', function() {
            console.log(btnVåreTjenester, 'click');
            setBtnsInactive();
            this.classList.add('active');
        }); */

    btnKontaktOss.addEventListener('click', function() {
        console.log(btnKontaktOss, 'click');
        setBtnsInactive();
        this.classList.add('active');
    });
};