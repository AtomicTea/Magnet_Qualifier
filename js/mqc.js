$(document).ready(function() {
  var schools = {
    "Austin (Maritime) HS": 50,
    "Austin (Teaching) HS": 50,
    "Bellaire HS": 80,
    "Challenge Early College HS": 75,
    "Chavez HS": 70,
    "Clifton HS": 50,
    "Davis HS": 66,
    "DeBakey HS": 80,
    "East Early College HS": 66,
    "Garden Oaks (6-8)": 66,
    "HAIS HS": 66,
    "Hartman MS": 70,
    "Hogg MS": 66,
    "HS for LECJ": 68,
    "Jones HS": 65,
    "Lamar HS": 80,
    "Long Academy (AHP) ": 70,
    "Long Academy (Futures)": 60,
    "Mickey Leland College Prep Academy": 66,
    "Milby HS": 66,
    "North Houston Early College HS": 66,
    "Pin Oak MS": 80,
    "Reagan HS": 66,
    "Revere MS": 66,
    "Rice 6-8": 66,
    "Rusk (6-8)": 70,
    "Scarborough HS": 60,
    "Sharpstown Int'l": 66,
    "Sterling (Aviation) HS": 66,
    "Sterling (Futures) HS": 66,
    "Stevenson MS": 66,
    "Waltrip HS": 66,
    "Washington (Eng.) HS": 70,
    "Washington (Futures) HS": 70,
    "Westside (Futures) HS": 80,
    "Westside (Tech.) HS": 75,
    "Wilson (6-8) MS": 0,
    "Yates (Comm.) HS": 66,
    "Yates (Futures) HS": 66,
    "Young Women's College Prep Academy": 66
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
    //Test grep command for separating hs or ms

    schools = $.grep($.map(schools, function(v,k){ return k;}), function(elem) { return (elem.search("HS") > -1);});
    ["Challenge ECHS", "East ECHS", "HSLECJ", "North Houston ECHS"]
    
    // end test grep command
    $.each(schools, function (school, cutoff) {
      if (score >= cutoff) {
        $('#result-list').append('<li  class="list-group-item">'+ school + '</li>');
      }
    });
  }).on('hidden.bs.modal', function (event) {
    $('#result-list').empty();
  });
  $('#btn-print').on('click', function () {
    window.print();
  });
});
