insertCode();

// Event listener to check if the user has invoked code mode
document.querySelector(".atto_html_button").addEventListener("click", function() {
    // Target the editor mode
    let editorCode = document.querySelector('#id_introeditor[hidden="hidden"]');

    // If statement to launch insertion codes
    if (editorCode !== null) {
        document.getElementById("UIDashboard").style.display = "block";
    }

    // If statement to launch insertion codes
    if (editorCode == null) {
        document.getElementById("UIDashboard").style.display = "none";
    }
});

function insertCode() {
    let textAreaEditor = document.querySelector(".editor_atto_wrap");
    let alertUI = '<div onclick="alertSiz()"><!-- Important box --><div class="well card" style="padding: 10px"> <h4 class="text-danger"><i aria-hidden="true" class="fa fa-exclamation-triangle"></i> Important</h4> <p>Insert content here</p></div><!-- End of important box --></div>';
    let UIDashboard = '<div class="UIDashboard" id="UIDashboard" style="display: none;">' + alertUI + '</div>';
    textAreaEditor.insertAdjacentHTML('beforeend', UIDashboard);

}

function alertSiz() {
    let alertUI = '<!-- Important box --><div class="well card" style="padding: 10px"> <h4 class="text-danger"><i aria-hidden="true" class="fa fa-exclamation-triangle"></i> Important</h4> <p>Insert content here</p></div><!-- End of important box -->';
    document.querySelector('#id_introeditor').value += alertUI;
}
