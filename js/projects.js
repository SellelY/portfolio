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

    let projectContainer = main.querySelector("#projects");
    let message = main.querySelector("#message");

    try {
        let response = await fetch("/php/index.php");
        let data = await response.json();
        projectContainer.innerHTML = "";
        console.log(data);

        if (!response.ok) {
            message.innerHTML = `Oops! Something went wrong, we got this from the server <span>${data.message}</span>.`;
        } else {
            data.projects.forEach((project) => {
                let projectImage = document.createElement("div");
                projectImage.id = "project-image";

                project.images.forEach((imageURL) => {
                    let image = document.createElement("img");
                    image.src = imageURL;

                    let imageName = document.createElement("p");
                    imageName.className = "image-name";
                    imageName.textContent = project.name;

                    let imageContainer = document.createElement("div");
                    imageContainer.classList = "image.container";
                    imageContainer.appendChild(image);
                    imageContainer.appendChild(imageName);

                    projectImage.appendChild(imageContainer);
                });

                projectContainer.appendChild(projectImage)

            });
        }

    } catch (error) {
        console.error(error);
    }

}

projects();
