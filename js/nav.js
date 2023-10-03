"use strict";

let nav = document.querySelector("nav");

nav.innerHTML = `
<div class="nav-buttons">
    <button id="hem">HEM</button>
    <button id="projekt">PROJEKT</button>
    <button id="sociala medier">SOCIALA MEDIER</button>
    <button id="om-mig">OM MIG</button>
</div>
`;

let projectBtn = nav.querySelector("#projekt");
projectBtn.addEventListener("click", projects);