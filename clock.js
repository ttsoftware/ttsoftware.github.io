function timeForBeer(){

  var today = new Date();
  var beerDate = new Date();
  var n = beerDate.getDay();

  switch(n){
    case 0:
      beerDate.setDate(today.getDate()+5);
      break;
    case 1:
      beerDate.setDate(today.getDate()+4);
      break;
    case 2:
      beerDate.setDate(today.getDate()+3);
      break;
    case 3:
      beerDate.setDate(today.getDate()+2);
      break;
    case 4:
      beerDate.setDate(today.getDate()+1);
      var audio = new Audio('imorgen.mp3');
      audio.play();
      break;
    case 5:
      if(beerDate.getHours() >= 15 && beerDate.getMinutes() >= 0){
        beerDate.setDate(today.getDate()+7);
      }
      break;
    case 6:
      beerDate.setDate(today.getDate()+6);
      break;
  }
  beerDate.setHours(15);
  beerDate.setMinutes(0);
  beerDate.setSeconds(0);

  var diff  = beerDate.getTime()/1000 - today.getTime()/1000;
  return diff;
}

$(document).ready(function() {
  clock = $('.clock').FlipClock(timeForBeer(), {
        clockFace: 'DailyCounter',
        countdown: true,
        callbacks: {
          stop: function() {
            var audio = new Audio('stik.mp3');
            audio.play();
            setTimeout(function(){
              clock.setTime(timeForBeer());
              clock.start();
            }, 32400000);
          }
        }
    });
});
