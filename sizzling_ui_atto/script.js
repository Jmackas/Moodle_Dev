
setTimeout(myFunction, 1000);

function myFunction() {
    insertCode();
}



// Event listener to check if the user has invoked code mode
document.querySelector(".atto_html_button").addEventListener("click", function() {
    // Target the editor text area to check if invoked
    let editorCode = document.querySelector('#id_introeditor[hidden="hidden"]');

   // If statement to show the UI dashboard when code editor is off
    if (editorCode !== null) {
        document.getElementById("UIDashboard").style.display = "block";
    }

    // If statement to hide the UI dashboard when code editor is off
    if (editorCode == null) {
        document.getElementById("UIDashboard").style.display = "none";
    }
});

// The code that contains the sizzling UI elements
function insertCode() {
    // Target the atto editor text area
    let textAreaEditor = document.querySelector(".editor_atto_wrap");
    // Create the code for the alert UI 
    let alertUI = '<div onclick="alertSiz()"><!-- Important box --><div class="well card" style="padding: 10px"> <h4 class="text-danger"><i aria-hidden="true" class="fa fa-exclamation-triangle"></i> Important</h4> <p>Insert content here</p></div><!-- End of important box --></div>';
    // Create the code for the UI dashboard
    let UIDashboard = '<div class="UIDashboard" id="UIDashboard" style="display: none;">' + alertUI + '</div>';
    // Insert the dashboard code under the Atto text editor
    textAreaEditor.insertAdjacentHTML('beforeend', UIDashboard);

}

// Insert the alert code into the editor
function alertSiz() {
    let alertUI = '<!-- Important box --><div class="well card" style="padding: 10px"> <h4 class="text-danger"><i aria-hidden="true" class="fa fa-exclamation-triangle"></i> Important</h4> <p>Insert content here</p></div><!-- End of important box -->';
    document.querySelector('#id_introeditor').value += alertUI;
}
