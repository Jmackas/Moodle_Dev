// Scripts developed from https://stackoverflow.com/questions/5248189/sort-select-menu-alphabetically/5248918#5248918

invokeSort();

// Check if the grades module is active
function invokeSort() {
    let entireDoc = document.querySelector('body');
    entireDoc.insertAdjacentHTML('afterbegin', '<button onclick="sortListAlph()" class="bttn">Sort First Name</button>');
    entireDoc.insertAdjacentHTML('afterbegin', '<br>');
}

// Sort function
function sortListAlph() {
    // Checking the page it is on (for grade pages)
    let ifGradePage = document.getElementById("page-grade-report-overview-index");
    // For log pages
    let ifLogPage = document.getElementById("page-report-log-index");

    // Customised for the grade page
    if (ifGradePage !== null) {
        var cl = document.querySelector('[name="userid"]');
    }
    
    // Customised for the log page
    else if (ifLogPage !== null) {
        var cl = document.querySelector('[name="user"]');
    }

    var clTexts = new Array();

    for (i = 1; i < cl.length; i++) {
        clTexts[i - 1] = cl.options[i].text.toUpperCase() + "," + cl.options[i].text + "," + cl.options[i].value + "," + cl.options[i].selected;
    }

    clTexts.sort();

    for (i = 1; i < cl.length; i++) {
        var parts = clTexts[i - 1].split(',');

        cl.options[i].text = parts[1];
        cl.options[i].value = parts[2];
        if (parts[3] == "true") {
            cl.options[i].selected = true;
        } else {
            cl.options[i].selected = false;
        }
    }
}

/*=======

Changing where the sort starts requires the array number to be changed on both the element retrieval and element sort

=======*/
