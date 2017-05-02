$(document).ready(function(){
  $("form#forms").submit(function(event){
    event.preventDefault();
    var array = $("input#input1").val().toLowerCase().split("");
    var vowels = ["a", "e", "i", "o", "u"];
    var output = [];

    for (var i = 0; i < vowels.length; i ++) {
      for (var index = 0; index < array.length; index ++ ) {
            if (array[index] === vowels[i]) {
              (array[index] = "-")
            }
        };
      };
      var newString = array.join("");
       $("p").append(newString);  
  });
});
