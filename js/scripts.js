var primeSifter = function(number) {
  var all = []
  for(var i = 2; i <= number; i++) {
    all.push(i);
  }

  for(var prime = 2; prime < number; prime++) {
    for(var i = prime; i < all.length; i++) {
      if (all[i] % prime === 0)
        all.splice(i, 1)
    }
  }
  return all;
}

$(document).ready(function(){

  $("#prime-sifter").submit(function(event){

    var input = ($("input#input-string").val());
    var result = primeSifter(input);
    $(".output").text(result);
    // $("#result").show();
    event.preventDefault();

  });

});
