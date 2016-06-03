// // the following jquery function acts on the form element
// in the /views/index.ejs file, you can add new entries to the DB
// via submission of the form which will add to the database and also
// update the list

$('#word-form').on('submit', function() {
    event.preventDefault(); // prevents the default post action of the form
    // that routes through /words
    var ingles = $('#inginput').val(); // captures the ing input
    var espanol = $('#espinput').val() // captures the esp input
    // the following sends an ajax request to the DB that post the ingles
    // and espanol data in the DB
    $.ajax('/words', {
      method: 'POST',
      data: {
        ing: ingles,
        esp: espanol
      },
      success: function() {
        console.log('added');
        // this console logs when the asynch ajax call is finished
      }

    });

    $('#inginput').val(""); // clears the input box after the ajax completes
    $('#espinput').val(""); // clears the input box after the ajax completes

    addWord(ingles, espanol); // this updates the list with the ingles and
    // espanol variables that are passed in from submission of the form
});

// the following function appends to the ul list
function addWord(ingles, espanol) {
    var $li = $('<li></li>'); // creates an html element to append
    $li.append(ingles + ' - ' + espanol); // populats the html element
    $('#word-list').append($li); // apppends the element to the ul
}
