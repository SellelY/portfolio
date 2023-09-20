"use strict";

let main = document.querySelector("main");

async function projects () {

    main.innerHTML = `
        <div id="project-container">
            <p id=message></p>
            <div id=projects></div>
        </div>
    `;

    let projects = main.querySelector("#projects");
    let message = main.querySelector("#message");

    try {
        let response = await fetch("/php/index.php");
        let data = await response.json();

        if (!response.ok) {
            message.innerHTML = `Oops! Something went wrong, we got this from the server <span>${data.message}</span>.`;
        } else {
            projects.innerHTML = `
                <div id=image>
                    <image src="${data.projects[0].image}">
                    <p class=image-name>${data.projects[0].name}</p>
                </div>
            `;
        }
    } catch (error) {
        console.error(error);
    }

}

projects();
