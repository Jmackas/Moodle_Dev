setTimeout(attoEditorSiz, 1000);

function attoEditorSiz() {
    // Checking atto editor exists on page
    let attoeditorcheck = document.querySelector(".editor_atto_wrap");
    if (attoeditorcheck !== null) {
        sizzlingUI();
    }
}

function sizzlingUI() {
    insertCode();

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
        // BinderHub Code Insert
        let binderHubIns = '<div onclick="binderHubIns()">BinderHub Code</div>'
        // Create the code for the UI dashboard
        let UIDashboard = '<div class="UIDashboard" id="UIDashboard" style="display: none;">' + alertUI + binderHubIns + '</div>';
        // Insert the dashboard code under the Atto text editor
        textAreaEditor.insertAdjacentHTML('beforeend', UIDashboard);

    }

}

// Insert the alert code into the editor
function alertSiz() {
    // Get the UI code
    let alertUI = '<!-- Important box --><div class="well card" style="padding: 10px"> <h4 class="text-danger"><i aria-hidden="true" class="fa fa-exclamation-triangle"></i> Important</h4> <p>Insert content here</p></div><!-- End of important box -->';
    // Insert the UI code at the end of the editor
    document.querySelector('#id_introeditor').value += alertUI;
}

// Insert the BinderHub code
function binderHubIns() {
    // Get the URL from the user via a prompt
    let binderHubURL = prompt("Please enter the BinderHub URL", "");
    // Add the URL into the iframe
    let binderHubIframe = '<iframe src="' + binderHubURL + '" height="600" width="100%" sandbox="allow-top-navigation allow-scripts allow-same-origin allow-popups allow-pointer-lock allow-forms" style="border:none;"></iframe>'
    // Insert the code at the end of the editor
    document.querySelector('#id_introeditor').value += binderHubIframe;
}
