"use strict";

let main = document.querySelector("main");

async function projects () {

    main.innerHTML = `
        <div id="project-container"></div>
    `;

    let projectContainer = main.querySelector("#project-container");

    try {
        let response = await fetch("/php/index.php");
        let data = await response.json();

        if (!response.ok) {
            // SKAPA MESSAGE OVANFÖR!!
            message.innerHTML = `Oops! Something went wrong, we got this from the server <span>${data.message}</span>.`;
        }
    }

}

projects();
