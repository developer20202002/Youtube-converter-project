var input = document.querySelector("#file-path");
var submit = document.querySelector("#send-file");
//Require functions dont work in browsers, use browserify in order to compile it

//  Attach event listener to upload button
submit.addEventListener('click', () => {
  // Read the submitted file
  var reader = new FileReader();
  reader.onload = function() {
    var fileContext = reader.result;
    var matches = fileContext.match(/\bhttps?:\/\/\S+/gi);
    sendURL(matches[0]);
  };
  reader.readAsText(input.files[0]);
});

function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}

// Notifier function for browse button
$(function() {
  // Attach 'file-change' event to all file inputs on the page
  $(document).on("change", ":file", function() {
    var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input
        .val()
        .replace(/\\/g, "/")
        .replace(/.*\//, "");
    input.trigger("fileselect", [numFiles, label]);
  });

  // Attach custom filechange event
  $(document).ready(function() {
    $(":file").on("fileselect", function(event, numFiles, label) {
      var input = $(this)
          .parents(".input-group")
          .find(":text"),
        log = numFiles > 1 ? numFiles + " files selected" : label;

      if (input.length) {
        input.val("You have chosen: " + log);
      } else {
        if (log) alert("You have chosen: " + log);
      }
    });
  });
});
