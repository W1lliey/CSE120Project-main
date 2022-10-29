// This is where you make custom javascript
// Button to add multiple questions
$(function () {
    $("#btnAdd").bind("click", function () {
        var div = $("<tr />");
        div.html(GetDynamicTextBox(""));
        $("#TextBoxContainer").append(div);
    });
    $("body").on("click", ".remove", function () {
        $(this).closest("tr").remove();
    });
});
// Add Text boxes for create Course Page
function GetDynamicTextBox(value) {
    return '<td><input name = "DynamicTextBox" type="text" value = "' + value + '" class="form-control" /></td>' +
        '<td><input name = "DynamicTextBox" type="text" value = "' + value + '" class="form-control" /></td>' +
        '<td><input name = "DynamicTextBox" type="text" value = "' + value + '" class="form-control" /></td>' +
        '<td><input name = "DynamicTextBox" type="text" value = "' + value + '" class="form-control" /></td>' +
        '<td><button type="button" class="btn btn-danger remove"><i class="glyphicon glyphicon-remove-sign"></i></button></td>'
}