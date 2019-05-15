detectUser();

// Detect the user and invoke admin control options
function detectUser() {
    // Detect user's name
    let userName = document.querySelector(".usermendrop").innerText;

    // Array of managers to confirm. Note - add a space at the end of each name
    var managers = ["James Mackay ", "Natalie Deng "];

    // If the user is in the following array
    if (managers.includes(userName) == true) {
        // Check local storage to check if admin mode had been activated
        if (localStorage.getItem("Moodle Admin Mode") == "Activated") {
            // Activate admin mode
            activateAdmin()

            // Option to turn admin mode off
            let targettedNode = document.querySelector("ul.dropdown-menu.usermen");
            targettedNode.insertAdjacentHTML('beforeend', '<li><button onclick="deactivateAdmin()">Deactivate Admin Mode</button></li>');
        }

        if (localStorage.getItem("Moodle Admin Mode") == "Deactivated") {

            // Option to turn admin mode off
            let targettedNodeTwo = document.querySelector("ul.dropdown-menu.usermen");
            targettedNodeTwo.insertAdjacentHTML('beforeend', '<li><button onclick="activateAdmin()">Acivate Admin Mode</button></li>');
        }

        // Insert button for user if manager

    }

}

// Deactivate admin mode select
function deactivateAdmin() {
    localStorage.setItem("Moodle Admin Mode", "Deactivated");

    // Refresh required to deactivate admin
    window.location.reload();
}

// Activate admin mode
function activateAdmin() {
    // Confirm activation of admin mode and save to web storage
    localStorage.setItem("Moodle Admin Mode", "Activated");

    let targettedNode = document.querySelector("#logocontainer");
    targettedNode.insertAdjacentHTML('beforeend', ' <span class="adminModeText">Administrator Mode Activated</span>');
}
