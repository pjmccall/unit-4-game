var wins = 0;
var losses = 0;
var counter = 0;

var resetAndStart = function() {

  $("#crystals").empty();

randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;

$("#number-to-guess").text(randomNumber);


var images = ['assets/images/crystal-gem-01.jpg', 'assets/images/crystal-gem-02.jpg', 'assets/images/crystal-gem-03.jpg',
'assets/images/crystal-gem-04.jpg'];

for (var i = 0; i < images.length; i++) {

  var points = Math.floor(Math.random() * (12 - 1)) + 1;

  console.log(points);

  var crystal = $("<button>");

  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");

  imageCrystal.attr("src", images[i]);

  imageCrystal.attr("data-crystalvalue", points);
  $("#crystals").append(imageCrystal);
 
  }

  $("#total-points").text(counter);  

}

resetAndStart();

$(document).on('click', ".crystal-image", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));

  crystalValue = parseInt(crystalValue);

  console.log(crystalValue);

  counter += crystalValue;

  console.log(counter);

  $("#total-points").text(counter);

  if (counter > randomNumber) {
    losses ++;
    $("#losses").text(losses);
    counter = 0;
    resetAndStart();
  }

  else if (counter === randomNumber) {
    wins ++;
    $("#wins").text(wins);
    counter = 0;
    resetAndStart();
  }


});