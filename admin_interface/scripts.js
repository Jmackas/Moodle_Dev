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
            targettedNode.insertAdjacentHTML('afterend', '<button onclick="deactivateAdmin()" class="domAdmin">Deactivate the DOM</button>');
        }

    }

    // If local storage deactivated or not set yet
    if (localStorage.getItem("Moodle Admin Mode") == "Deactivated" || localStorage.getItem("Moodle Admin Mode") == null) {
        if (document.querySelector(".myprofileitem.email") !== null) {
            // Detect user's name
            let emailAddress = document.querySelector(".myprofileitem.email").innerText;

            // Array of managers to confirm.
            var managers = ["jacqui.veness@eit.edu.au", "Indumathi.v@eit.edu.au", "angie.tran@eit.edu.au", "james.theodosiadis@eit.edu.au", "Danielle.Techera@idc-online.com", "Steve.steyn@eit.edu.au", "Lucy.Smith@idc-online.com", "milind.siddhpura@eit.edu.au", "isabel@idc-online.co.za", "tulsi.shastri@eit.edu.au", "edwina@idc-online.com", "Luzette@idc-online.co.za", "sisipho@idc-online.co.za", "accounts@idc-online.co.za", "cpakamisa@gmail.com.za", "Emily.ONeil@idc-online.com", "miriam.munitz@eit.edu.au", "kieran@truss.io", "tech@idc-online.com", "James.Mackay@idc-online.com", "caroline.mackay@eit.edu.au", "kim.li@idc-online.com", "Megan.Kellett@eit.edu.au", "virginia.howard@eit.edu.au", "allison.gray@eit.edu.au", "david.gajdus@eit.edu.au", "jason.gabriel@eit.edu.au", "Logan.Frost@idc-online.com", "yuanyuan.fan@eit.edu.au", "natalie.holland@eit.edu.au", "renee.clarke@eit.edu.au", "lisa.chisari@idc-online.com", "paul.celenza@eit.edu.au", "Sharon.Bowler@eit.edu.au", "hello@danielboterhoven.tech", "thelma@idc-online.co.za", "carolina@idc-online.com", "support@truss.io", "holly.adams@eit.edu.au", "holly.adams@eit.edu.au"];

            if (managers.includes(emailAddress) == true) {
                // Option to turn admin mode off
                let targettedNodeTwo = document.querySelector(".block_myprofile");
                targettedNodeTwo.insertAdjacentHTML('afterend', '<button onclick="activateAdmin()" class="domAdmin">Activate the DOM</button>');

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

    // Import relevant styles
    document.querySelector("body").insertAdjacentHTML('beforeend', '<style>.adminPanel {background: linear-gradient(to right, #490f59, #a9224f);}</style>');

    // Pre-load grade scripts
    importGradeScripts();

    // Pre-load sort scripts
    importSortScripts();

    // Pre-load UI scripts
    importSizzlingUI();
}

// Import grade function scripts
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

// Import sort function scripts
function importSortScripts() {
    // Fetching grade page
    let gradePageCheck = document.getElementById("page-grade-report-overview-index");
    // Fetching the log page
    let logPageCheck = document.getElementById("page-report-log-index");
    // Fetching the grade page - single view
    let gradePageSingleViewCheck = document.getElementById("page-grade-report-user-index");


    // Check if user is on grade page
    if (gradePageCheck !== null || logPageCheck !== null || gradePageSingleViewCheck !== null) {
        // Call various functions
        var gradeScript = document.createElement('script');
        gradeScript.src = 'https://jmackas.github.io/Moodle_Dev/moodle_dropdown_sort/scripts.js';
        gradeScript.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(gradeScript);
    }
}

function importSizzlingUI() {
    var gradeScript = document.createElement('script');
    gradeScript.src = 'https://jmackas.github.io/Moodle_Dev/sizzling_ui_atto/script.js';
    gradeScript.type = 'text/javascript';
    document.getElementsByTagName('body')[0].appendChild(gradeScript);
}

/*

TRY AJAX

loadXMLDoc();

function loadXMLDoc(manager) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            manager = this.responseText;

            console.log(manager);

            ;
        }
    }
    ;
    xhttp.open("GET", "https://jmackas.github.io/Moodle_Dev/admin_interface/managers.txt", true);
    xhttp.send();
}



*/