$(document).ready(function() {
  var schools = {
    "Austin (Maritime)": 50,
    "Austin (Teaching)": 50,
    "Bellaire": 80,
    "Challenge ECHS": 75,
    "Chavez": 70,
    "Clifton": 50,
    "Davis": 66,
    "DeBakey": 80,
    "East ECHS": 66,
    "Garden Oaks (6-8)": 66,
    "HAIS": 66,
    "Hartman": 70,
    "Hogg": 66,
    "HSLECJ": 68,
    "Jones": 65,
    "Lamar": 80,
    "Long Academy (AHP)": 70,
    "Long Academy (Futures)": 60,
    "Mickey Leland": 66,
    "Milby": 66,
    "North Houston ECHS": 66,
    "Pin Oak": 80,
    "Reagan": 66,
    "Revere": 66,
    "Rice 6-8": 66,
    "Rusk (6-8)": 70,
    "Scarborough": 60,
    "Sharpstown Int'l": 66,
    "Sterling (Aviation)": 66,
    "Sterling (Futures)": 66,
    "Stevenson": 66,
    "Waltrip": 66,
    "Washington (Eng.)": 70,
    "Washington (Futures)": 70,
    "Westside (Futures)": 80,
    "Westside (Tech.)": 75,
    "Wilson (6-8)": 0,
    "Yates (Comm.)": 66,
    "Yates (Futures)": 66,
    "YWCPA": 66
  };

  $('#eligibleModal').on('show.bs.modal', function (event) {
    var score =  0;
    var answers = $('#mqc').serializeArray();
    $.each(answers, function( index, obj ) {
      score += +obj.value;
    });
    console.log("score = " + score);
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
  // $("#eligibleModal").printThis({
  //     debug: true,
  //     importCSS: true,
  //     importStyle: true,
  //     printContainer: true,
  //     loadCSS: "css/bootstrap.min.css",
  //     pageTitle: "Eligible Magnet Schools",
  //     removeInline: false,
  //     printDelay: 333,
  //     header: null,
  //     formValues: true
  // });
});
