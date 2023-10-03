"use strict";

let main = document.querySelector("main");

async function projects() {
  main.innerHTML = `
    <div id="project-container">
        <p id="message"></p>
        <div id="projects">
            <div id="loading">Loading, kindly wait...</div>
        </div>
    </div>
  `;

  let projectsContainer = main.querySelector("#projects");
  let message = main.querySelector("#message");

  try {
    let response = await fetch("/php/index.php");
    let data = await response.json();
    projectsContainer.innerHTML = "";
    console.log(data);

    if (!response.ok) {
      message.innerHTML = `Oops! Something went wrong, we got this from the server <span>${data.message}</span>.`;
    } else {
        data.projects.forEach((project) => {
          let media;

          if (project.media) {
            media = document.createElement("video");
            media.src = project.media;
            media.controls = true;
          } else {
            media = document.createElement("p");
            media.textContent = "The video cannot be displayed :(";
            media.innerHTML = "";
          }

          let image = document.createElement("img");
          image.src = project.images[0].url;

          let hoverName = document.createElement("div");
          hoverName.className = "hover-name";
    
          let imageName = document.createElement("p");
          imageName.className = "image-name";
          imageName.textContent = project.name;
    
          let imageContainer = document.createElement("div");
          imageContainer.classList = "image-container";
          imageContainer.appendChild(hoverName)
          imageContainer.appendChild(image);
          imageContainer.appendChild(media);
          hoverName.appendChild(imageName);

          imageContainer.addEventListener("click", () => {
            displayImagesFromArray(project);
          })
    
          projectsContainer.appendChild(imageContainer);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

function displayImagesFromArray(project) {
  main.innerHTML = "";

  main.innerHTML = `
    <div id="project-container">
        <p id="message"></p>
        <div id="projects">
            <div id="loading">Loading, kindly wait...</div>
        </div>
    </div>
  `;

  let projectsContainer = main.querySelector("#projects");
  projectsContainer.innerHTML = "";

  project.images.forEach((imageData) => {
    let imageContainer = document.createElement("div");
    imageContainer.classList = "image-container";

    let image = document.createElement("img");
    image.src = imageData.url;

    let media;

    if (project.media) {
      media = document.createElement("video");
      media.src = project.media;
      media.controls = true;
      media.autoplay = true;
      media.loop = true;
    } else {
      media = document.createElement("p");
      media.textContent = "The video cannot be displayed :(";
      media.innerHTML = "";
    }

    imageContainer.appendChild(media);
    imageContainer.appendChild(image);
    projectsContainer.appendChild(imageContainer);
  });
}