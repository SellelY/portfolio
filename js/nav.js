"use strict";

let nav = document.querySelector("nav");

nav.innerHTML = `

    <div class="nav-buttons">
        <button id="om-mig"><img id="user-icon" src="/media/users.png" alt="user icon">OM MIG</button>
    </div>

    <div class="nav-buttons">
        <button id="hem">HEM</button>
        <button id="projekt">PROJEKT</button>
        <button id="sociala medier">SOCIALA MEDIER</button>
    </div>
`;

let projectBtn = nav.querySelector("#projekt");
projectBtn.addEventListener("click", projects);