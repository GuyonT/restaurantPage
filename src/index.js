console.log("Testing if working hey");

import "./styles.css";
import aboutPage from "./aboutPage.js";
import menuPage from "./menuPage.js";

// Set initial theme
document.body.dataset.theme = 'light';

//part for theme toggle
document.addEventListener('DOMContentLoaded', () => { //wait the page is fully loaded before anything
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        if (document.body.dataset.theme === "dark") {
            document.body.dataset.theme = "light";
            themeToggle.innerHTML = 'mode &#x263D;';
        } else {
            document.body.dataset.theme = "dark";
            themeToggle.innerHTML = 'mode &#x263C;';
        }
    });

    const aboutButton = document.querySelector('.about-button');
    const menuButton = document.querySelector('.menu-button');
    const content = document.getElementById('content');



    //part for smooth transitions between tabs
    content.classList.add('content');

    const switchPage = (pageFunction) => {
        content.classList.add('hidden');
        setTimeout(() => {
            content.innerHTML = '';
            pageFunction();
            content.classList.remove('hidden');
        }, 500);
    };

    //part for switching between tabs
    aboutButton.addEventListener('click', () => {
        switchPage(aboutPage);
    });

    menuButton.addEventListener('click', () => {
        switchPage(menuPage);
    });

    // Initial load
    aboutPage();
});