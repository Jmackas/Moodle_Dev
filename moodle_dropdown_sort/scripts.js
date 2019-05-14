// Scripts developed from https://stackoverflow.com/questions/5248189/sort-select-menu-alphabetically/5248918#5248918

invokeSort();

// Check if the grades module is active
function invokeSort() {
    // Fetching grade page
    let gradePageCheck = document.getElementById("page-grade-report-overview-index");

    // Check if user is on grade page
    if (gradePageCheck !== null) {
        let entireDoc = document.getElementById('graded_users_selector');
        entireDoc.insertAdjacentHTML('afterend', '<button onclick="sortListAlph()" class="bttn">Sort First Name</button>');
        entireDoc.insertAdjacentHTML('afterend', '<br>');

        //sortlist();
    }
}

// Sort function
function sortListAlph() {

    var cl = document.querySelector('[name="userid"]');
    var clTexts = new Array();

    for (i = 2; i < cl.length; i++) {
        clTexts[i - 2] = cl.options[i].text.toUpperCase() + "," + cl.options[i].text + "," + cl.options[i].value + "," + cl.options[i].selected;
    }

    clTexts.sort();

    for (i = 2; i < cl.length; i++) {
        var parts = clTexts[i - 2].split(',');

        cl.options[i].text = parts[1];
        cl.options[i].value = parts[2];
        if (parts[3] == "true") {
            cl.options[i].selected = true;
        } else {
            cl.options[i].selected = false;
        }
    }
}