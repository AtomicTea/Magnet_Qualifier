$(document).ready(function() {
  var schools = {
    "*Baylor College of Medicine at Ryan MS(6th, 7th only)": 0,
	"*Black Vanguard MS": 0,
	"*Garden Oaks (6-8) MS": 0,
	"Hartman MS": 70,
    "Hogg MS": 55,
	"Pin Oak MS": 80,
	"Revere MS": 60,
	"Rice 6-8 MS": 80,
	"Rusk (6-8) MS": 70,
	"Stevenson MS": 80,
	"*Wilson MS (6th, 7th only)": 0,
	"Austin (Maritime) HS (9th, 10th only)": 50,
    "Austin (Teaching)HS(9th, 10th only)": 50,
    "Bellaire HS (9th only)": 80,
    "Challenge Early College HS (9th, 10th only)": 75,
    "Chavez HS": 70,
    "Clifton": 50,
    "Davis HS (9th, 10th only)": 65,
    "DeBakey HS (9th only)": 80,
    "East Early College HS (9th, 10th only)": 76,
    "HAIS HS": 75,
    "HSLECJ HS (9th, 10th only)": 68,
    "Jones HS (9th only)": 65,
    "Lamar HS (9th only)": 80,
    "Long Academy (AHP) HS ": 70,
    "Long Academy (Futures)HS 9th, 10th only)": 60,
    "Mickey Leland HS": 70,
    "Milby HS ": 70,
    "North Houston Early College HS (9th, 10th only)": 75,
    "Reagan HS (9th, 10th)": 80,
    "Scarborough HS (9th, 10th only)": 60,
    "Sharpstown Int'l HS (9th, 10th, 11th only)": 65,
	  "*South Early College HS (9th, 10th only)": 0,
    "Sterling (Aviation) HS": 0,
    "Sterling (Futures) HS": 60,
    "Waltrip HS ": 60,
    "Washington (Eng.) HS (9th, 10th only)": 70,
    "Washington (Futures) HS (9th, 10th, 11th only)": 70,
    "Westside (Futures) HS (9th, 10th only)": 80,
    "Westside (Tech.) HS (9th, 10th only)": 75,
    "Yates (Comm.) HS": 67,
    "Yates (Futures) HS": 67,
    "YWCPA HS (6th - 11th only) ": 80
  };

  function sum(array) {
    var total = 0;
    $.each(array, function(index, obj) {
      total += +obj.value;
    });
    return total;
  }

  function calculateScore() {
    var other = sum($('.grades, .considerations').serializeArray());
    var staar = sum($('.staar').serializeArray());
    var iowa  = sum($('.iowa').serializeArray());
    console.log("other: " + other + " staar: " + staar + " iowa:" + iowa);
    return staar >= iowa ? staar + other : iowa + other;
  }


  $('#eligibleModal').on('show.bs.modal', function (event) {
    var score = calculateScore();
    console.log("score = " + score);
    $.each(schools, function (school, cutoff) {
      if (score >= cutoff) {
        $('#result-list').append('<li  class="list-group-item">'+ school + '</li>');
      }
    });
    
  $( "select option:selected" )
    .filter(function( index ) {
      return $( "#result-list", this ).css( "background-color", "red" );
    })
      
    
    
  }).on('hidden.bs.modal', function (event) {
    $('#result-list').empty();
  });
  $('#btn-print').on('click', function () {
    window.print();
  });
});
