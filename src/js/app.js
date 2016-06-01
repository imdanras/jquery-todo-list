$(document).ready(function() {
    //variable for remove button
    var xButton = '<a><button id="newBtn">X</button></a>';

    $('#myForm').on('submit', function(e) {
        //enter preventDefault to prevent the page from reloading on each submission
        e.preventDefault();
        //create a variable to store the input value
        var inputSpot = $('#input').val();
        //trying to wrap the function in an if statement so if the submitted input is blank, it simply re-focuses on the input field and doesn't add a blank list item. Still can't get it to work.
        /* if (inputSpot = '') {
        //     $('input').val('').focus();
        // //query the input value by adding it within a list item and button variable and append it to the blank ul.
        }  else {*/
            $('#list').append('<li>' + inputSpot + xButton + '</li>');
        //clears the input field by entering a blank string and re-focuses the cursor to the field.
        $('#input').val('').focus();
        // } end bracket for the commented out if statement
    });

    //listener to all anchor tags that have been added (in this case, only the 'X' button) that will, on click, remove it's parent element.
    $(document).on('click', 'a', function(e) {
        //prevents page reload
        e.preventDefault();
        //upon clicking, will remove it's parent element. in this case, since it's placed within the <li></li>, clicking will remove that specific element.
        $(this).parent().remove();
    });
    //end of document.ready function
});
