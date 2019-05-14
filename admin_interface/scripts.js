
detectUser();

// Detect the 
function detectUser () {
    // Detect user's name
    let userName = document.querySelector(".usermendrop").innerText;

    // If the user is the following name
     if (userName = "James Mackay") {
        // Insert button for user if manager
        let targettedNode = document.querySelector("ul.dropdown-menu.usermen");
        targettedNode.insertAdjacentHTML('beforeend', '<li><button onclick="activateAdmin()">Activate Admin Mode</button></li>');
    } 
    
}

// Activate admin mode
function activateAdmin() {
    console.log("worked!");
}