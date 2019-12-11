$(document).ready( function () {

     var square = '<span class="cell"></span>';
   //  var squareCheck = '<span class="cell check"></span>';
   //  var array = [];
   //  function randomNumber(min,max) {
   //  return Math.floor(Math.random() * (max - min + 1)) + min;
   //  }
   //  var numero = randomNumber(1,36);
   //
   //  for (; array.length < 16;) {
   //          var random = randomNumber(1,36);
   //          if (!array.includes(random)) {
   //              array.push(random);
   //      }
   //  }
   // array.sort();
   //  console.log(array);
   //
   //
    for (var i = 0; i < 36; i++) {
        $('.container').append(square);
    }
   //
   //
   //

   $('.cell').click(function () {
       var that = $(this)
       $.ajax({
           url :'https://flynn.boolean.careers/exercises/api/random/int',
           method : 'GET',
           success : function (data) {
               var number = data.response;
               console.log(number);
               $('#result').text(number);
               if (number > 5) {
                   that.addClass('green');
               } else {
                   that.addClass('blue');
               }

           },
           error : function () {

          }
      });
  });

});
