detectUser();

// Detect the user and invoke admin control options
function detectUser() {

    // Check local storage to check if admin mode had been activated
    if (localStorage.getItem("Moodle Admin Mode") == "Activated") {

        // Activate admin mode
        adminModeScripts();

        // Option to turn admin mode off
        if (document.querySelector(".myprofileitem.email") !== null) {
            let targettedNode = document.querySelector(".block_myprofile");
            targettedNode.insertAdjacentHTML('afterend', '<button onclick="deactivateAdmin()" class="domAdmin">Deactivate the Dom</button>');
        }

    }

    // If local storage deactivated or not set yet
    if (localStorage.getItem("Moodle Admin Mode") == "Deactivated" || localStorage.getItem("Moodle Admin Mode") == null) {
        if (document.querySelector(".myprofileitem.email") !== null) {
            // Detect user's name
            let emailAddress = document.querySelector(".myprofileitem.email").innerText;

            // Array of managers to confirm. Note - add a space at the end of each name
            var managers = ["James.Mackay@idc-online.com"];

            if (managers.includes(emailAddress) == true) {
                // Option to turn admin mode off
                let targettedNodeTwo = document.querySelector(".block_myprofile");
                targettedNodeTwo.insertAdjacentHTML('afterend', '<button onclick="activateAdmin()" class="domAdmin">Activate the Dom</button>');

            }
        }

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

    // Refresh required to activate admin
    window.location.reload();

}

function adminModeScripts() {

    // Temp stylesheet
    let targettedNodeTwo = document.querySelector("body");
    targettedNodeTwo.insertAdjacentHTML('afterend', ' <style>header#page-header-wrapper {background: linear-gradient(to right, #490f59, #a9224f);}.adminModeText{font-weight:bold;}</style>');

    // Note stating it is admin mode
    let targettedNode = document.querySelector("#logocontainer");
    targettedNode.insertAdjacentHTML('beforeend', ' <span class="adminModeText">Dom Mode Activated</span>');

    // Pre-load grade scripts
    importGradeScripts();
}

// Import relevant scripts
function importGradeScripts() {

    // Fetching grade page
    let gradePageCheck = document.getElementById("page-grade-report-singleview-index");

    // Check if user is on grade page
    if (gradePageCheck !== null) {
        // Call various functions
        var gradeScript = document.createElement('script');
        gradeScript.src = 'https://jmackas.github.io/Moodle_Dev/moodle_grade_converter/script.js';
        gradeScript.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(gradeScript);
    }


}

/*

TRY AJAX

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("maincontent").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://jmackas.github.io/Scope-Systems/", true);
  xhttp.send();
}



*/