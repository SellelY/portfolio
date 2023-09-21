"use strict";

let main = document.querySelector("main");

async function projects () {

    main.innerHTML = `
        <div id="project-container">
            <p id=message></p>
            <div id=projects>
            <div id=loading>Loading, kindly wait...</div>
            </div>
        </div>
    `;

    let projects = main.querySelector("#projects");
    let message = main.querySelector("#message");

    try {
        let response = await fetch("/php/index.php");
        let data = await response.json();
        projects.innerHTML = "";
        console.log(data);

        if (!response.ok) {
            message.innerHTML = `Oops! Something went wrong, we got this from the server <span>${data.message}</span>.`;
        } else {
            data.forEach( async(project) => {
                console.log(project);
            })

            /*projects.innerHTML = `
                <div id=project-image>
                    <image src="${data.projects[0].image}">
                    <p class=image-name>${data.projects[0].name}</p>
                </div>
            `; */
        }

        projects.appendChild(projectImage)

    } catch (error) {
        console.error(error);
    }

}

projects();
