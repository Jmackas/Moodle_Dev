// Function invocations
timezoneCalc();

function timezoneCalc() {
    let webinarTable = document.querySelectorAll("#webinartable td");

    // Detect all instances of the time zone in the first column
    let webinarFirstCol = document.querySelectorAll("#webinartable td:nth-of-type(1)");

    // Identify all instances of the time zone to be updated in the second column
    let webinarSecondCol = document.querySelectorAll("#webinartable td:nth-of-type(2)");

    // Find user timezone
    let timezoneDiff = new Date().getTimezoneOffset();

    // Convert to hours (-1 is the additive inverse)
    timezoneDiff = (timezoneDiff / 60) * -1;

    // Convert to epoch
    timezoneDiff = timezoneDiff * 3600000;

    // Loop through all values in the first column of the table and convert times
    for (let i = 1; i < webinarFirstCol.length; i++) {
        let finalDiff;

        // Convert table cell from text to int (hacky method - .value didn't work). Also convert date to Epoch time.
        finalDiff = parseInt(new Date(webinarFirstCol[i].innerHTML).getTime());

        // Add the timezone difference
        finalDiff = finalDiff + timezoneDiff;

        // Add the updated values to the second column
        webinarSecondCol[i].innerHTML = new Date(finalDiff);

    }

}
