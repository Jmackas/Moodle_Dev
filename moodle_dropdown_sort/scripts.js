invokeSort();

function invokeSort() {
    sortlist();
}

function sortlist() {

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
