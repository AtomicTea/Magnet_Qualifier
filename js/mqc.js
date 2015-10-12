$(document).ready(function() {
  var schools = [
  {"campus":"Baylor","cutoff":0,"grade":["6","7"]},
  {"campus":"Black","cutoff":"V","grade":["6","7","8"]},
  {"campus":"Burbank MS","cutoff":"V","grade":["6","7","8"]},
  {"campus":"Clifton","cutoff":50,"grade":["6","7","8"]},
  {"campus":"Fleming","cutoff":"FA","grade":["6","7","8"]},
  {"campus":"Fondren MS","cutoff":0,"grade":["6","7","8"]},
  {"campus":"Garden Oaks","cutoff":0,"grade":["6","7","8"]},
  {"campus":"Gregory-Lincoln","cutoff":"FA","grade":["6","7","8"]},
  {"campus":"Hamilton","cutoff":"V","grade":["6","7","8"]},
  {"campus":"Hartman","cutoff":70,"grade":["6","7","8"]},
  {"campus":"Hogg","cutoff":55,"grade":["6","7","8"]},
  {"campus":"Johnston","cutoff":"FA","grade":["6","7","8"]},
  {"campus":"Lanier","cutoff":"V","grade":["6","7","8"]},
  {"campus":"Long Academy (Allied Health Prof.)","cutoff":70,"grade":["6","7","8"]},
  {"campus":"Mandarin","cutoff":0,"grade":["6"]},
  {"campus":"Marshall","cutoff":"FA","grade":["6","7","8"]},
  {"campus":"Mickey Leland","cutoff":70,"grade":["6","7","8"]},
  {"campus":"Pershing","cutoff":"FA","grade":["6","7","8"]},
  {"campus":"Pin Oak","cutoff":80,"grade":["6","7","8"]},
  {"campus":"Revere","cutoff":60,"grade":["6","7","8"]},
  {"campus":"Rice 6-8","cutoff":80,"grade":["6","7","8"]},
  {"campus":"Rusk (6-8)","cutoff":70,"grade":["6","7","8"]},
  {"campus":"Sharpstown International","cutoff":65,"grade":["6","7","8"]},
  {"campus":"Stevenson","cutoff":80,"grade":["6","7","8"]},
  {"campus":"TH Rogers","cutoff":"V","grade":["6","7","8"]},
  {"campus":"Welch","cutoff":"FA","grade":["6","7","8"]},
  {"campus":"Wharton","cutoff":80,"grade":["6","7","8"]},
  {"campus":"Williams","cutoff":0,"grade":["6","7","8"]},
  {"campus":"Wilson","cutoff":0,"grade":["6","7"]},
  {"campus":"YWCPA","cutoff":80,"grade":["6","7","8"]},
  {"campus":"Austin (Maritime)","cutoff":50,"grade":["9","10"]},
  {"campus":"Austin (Teaching)","cutoff":50,"grade":["9","10"]},
  {"campus":"Bellaire","cutoff":80,"grade":["9"]},
  {"campus":"Carnegie","cutoff":"V","grade":["9","10"]},
  {"campus":"Challenge ECHS","cutoff":75,"grade":["9","10"]},
  {"campus":"Chavez","cutoff":70,"grade":["9","10","11","12"]},
  {"campus":"Davis","cutoff":65,"grade":["9","10"]},
  {"campus":"DeBakey","cutoff":80,"grade":["9"]},
  {"campus":"East ECHS","cutoff":76,"grade":["9","10"]},
  {"campus":"Energy","cutoff":0,"grade":["9","10"]},
  {"campus":"Furr (Futures)","cutoff":0,"grade":["9","10"]},
  {"campus":"Furr (STEM)","cutoff":0,"grade":["9","10","11","12"]},
  {"campus":"HAIS","cutoff":75,"grade":["9","10","11","12"]},
  {"campus":"HS for Law Enf. & Crim. Just.","cutoff":68,"grade":["9","10"]},
  {"campus":"HSPVA","cutoff":0,"grade":["9","10","11","12"]},
  {"campus":"Jones","cutoff":65,"grade":["9"]},
  {"campus":"Kashmere (Futures)","cutoff":0,"grade":["9","10","11","12"]},
  {"campus":"Kashmere(STEM)","cutoff":0,"grade":["9","10","11","12"]},
  {"campus":"Lamar","cutoff":80,"grade":["9"]},
  {"campus":"Long Academy (Futures)","cutoff":60,"grade":["9","10"]},
  {"campus":"Mickey Leland","cutoff":70,"grade":["9","10","11","12"]},
  {"campus":"Milby","cutoff":70,"grade":["9","10","11","12"]},
  {"campus":"North Houston ECHS","cutoff":75,"grade":["9","10"]},
  {"campus":"Reagan","cutoff":80,"grade":["9","10"]},
  {"campus":"Scarborough","cutoff":60,"grade":["9","10"]},
  {"campus":"Sharpstown International","cutoff":65,"grade":["9","10","11"]},
  {"campus":"South ECHS","cutoff":0,"grade":["9","10"]},
  {"campus":"Sterling (Aviation)","cutoff":0,"grade":["9","10","11","12"]},
  {"campus":"Sterling (Futures)","cutoff":60,"grade":["9","10","11","12"]},
  {"campus":"Waltrip","cutoff":60,"grade":["9","10","11","12"]},
  {"campus":"Washington (Engineering)","cutoff":70,"grade":["9","10"]},
  {"campus":"Washington (Futures)","cutoff":70,"grade":["9","10","11"]},
  {"campus":"Westside (Futures)","cutoff":80,"grade":["9","10"]},
  {"campus":"Westside (Integrated Technology)","cutoff":75,"grade":["9","10"]},
  {"campus":"Yates (Communications)","cutoff":67,"grade":["9","10","11","12"]},
  {"campus":"Yates (Futures)","cutoff":67,"grade":["9","10","11","12"]},
  {"campus":"YWCPA","cutoff":80,"grade":["6","7","8","9","10","11"]}
];

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

  $('#gradelevel').on('change', function(event){
    if ($('#gradelevel').val() == 'V' || $('#gradelevel').val() == 'FA') {
      $('#magnet-schools').prop('disabled', true);
    } else {
       $('#magnet-schools').prop('disabled', false);
    }
  });

  $('select[required]').on('change', function(event){
    if ($('#gradelevel').val() != '' && $('#grades').val() != '') {
      $('#see-eligible-schools').prop('disabled', false);
    }
  });

  $('#eligibleModal').on('show.bs.modal', function(event) {
    var gradeLevel = $('#gradelevel').val();
    var score;
    if (gradeLevel == "V" || gradeLevel == "FA") {
      score = gradeLevel;
    } else {
      score = calculateScore();
    }
    console.log("score = " + score);
    $.each(schools, function (index, school) {
      if ($.isNumeric(score)) {
        if (score >= school.cutoff && school.grade.indexOf(gradeLevel) >= 0) {
          $('#result-list').append('<li  class="list-group-item">'+ school.campus + '</li>');
        }
      } else {
        if (score == school.cutoff) {
          $('#result-list').append('<li  class="list-group-item">'+ school.campus + '</li>');
        }
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
