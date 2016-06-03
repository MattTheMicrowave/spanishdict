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
    addWord(ingles, espanol);
});

function addWord(ingles, espanol) {
    var $li = $('<li></li>');
    $li.append(ingles + ' - ' + espanol);
    $('#word-list').append($li);
}
