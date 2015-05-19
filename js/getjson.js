$.getJSON('test.json', function(data){
   for (var i = 0; i < data.rows.length; i++) {
      $('#test').append('<p>' + data.rows[i].realName + '</p>');
   }
});