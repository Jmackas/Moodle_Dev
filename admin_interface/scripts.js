detectUser();

// Detect the 
function detectUser() {
    // Detect user's name
    let userName = document.querySelector(".usermendrop").innerText;

    // Array of managers to confirm. Note - add a space at the end of each name
    var managers = ["James Mackay ", "Natalie Deng"];

    // If the user is in the following array
    if (managers.includes(userName) == true) {
        // Insert button for user if manager
        let targettedNode = document.querySelector("ul.dropdown-menu.usermen");
        targettedNode.insertAdjacentHTML('beforeend', '<li><button onclick="activateAdmin()">Activate Admin Mode</button></li>');
    }

}

// Activate admin mode
function activateAdmin() {
    // Confirm activation of admin mode and save to web storage
    localStorage.setItem("Moodle Admin Mode", "Activated");
    
    console.log("worked!");
}


//    console.log(localStorage.getItem("Moodle Admin Mode"));