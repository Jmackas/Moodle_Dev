// Start program on load
extensionInterface();

function extensionInterface() {

    let entireDoc = document.querySelector('body');
    entireDoc.insertAdjacentHTML('beforebegin', '<div class="adminPanel"><button onclick="confirmationCheck()" class="extensionButton checkData">Check Fields to be Changed</button><button onclick="gradeCorrector()" class="extensionButton overwriteData" style="display: none;">Overwrite Changes</button></div>');

}

// Confirm with user that they are correcting the right grades
function confirmationCheck() {
    console.log("Confirmation Check Worked!");

    // Highlight the specific table
    let fieldsToBeChanged = document.querySelectorAll("[tabindex='1']");

    // Loop through all the the fields that will be changed
    let i;
    for (i = 0; i < fieldsToBeChanged.length; i++) {
        fieldsToBeChanged[i].style.backgroundColor = "red";
        fieldsToBeChanged[i].style.color = "white";
    }

    document.querySelector("body").insertAdjacentHTML('afterend', '<style>.overwriteData {display: block !important;} .checkData {display: none !important;}</style>');
}

// Function to start the algorithm
function gradeCorrector() {
    let gradeUpdater = document.querySelectorAll("[tabindex='1']");

    // Loop through all items in the array
    let i;
    for (i = 0; i < gradeUpdater.length; i++) {
        // If over 67 %, then give 100%
        if (gradeUpdater[i].value > 66.7) {
            gradeUpdater[i].value = "100";
            // If under 67% then give 0%
        } else {
            gradeUpdater[i].value = "0";
        }
    }
}
