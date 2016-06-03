$('#word-form').on('submit', function() {
    event.preventDefault();
    var ingles = $('#inginput').val();
    var espanol = $('#espinput').val()
    $.ajax('/words', {
      method: 'POST',
      data: {
        ing: ingles,
        esp: espanol
      },
      success: function() {
        console.log('added');
      }

    });
    $('#inginput').val("");
    $('#espinput').val("");
});

function addWord(ingles, espanol) {
    



}
