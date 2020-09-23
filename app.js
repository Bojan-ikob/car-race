$(function() {
  $("#raceBtn").click(function() {
   
    $("#count").css("display", "block");
    let counter = 3;
    $("#count").text(counter);
    let timer = setInterval(function() {
      counter--;
      $("#count").text(counter);
      if (counter <= -1) {
        clearInterval(timer);
        $("#count").css("display", "none");

        function CheckIfComplete() {
          if (isComplete == false) {
            isComplete = true;
          } else {
            Place = "Second";
          }
        }
         $("#raceBtn").attr("disabled", false);
    $("#startOverBtn").attr("disabled", false);
        let CarWidth = $("#carOne").width();
        let RaceTrackWidth = $(window).width() - CarWidth;
        let RaceTime1 = Math.floor(Math.random() * 5000 + 1);
        let RaceTime2 = Math.floor(Math.random() * 5000 + 1);
        let isComplete = false;
        let Place = "First";
        $("#carOne").animate(
          {
            left: RaceTrackWidth
          },
          RaceTime1,
          function() {
            CheckIfComplete();
            $("#finish").css("display", "block");
            let rezult1 = $(".rezultat1").text(); 
            $(".rezultat1").append(
              "Finished in " +
                Place +
                " place whith the time of " +
                RaceTime1 +
                " milliseconds <br>"
            );
            localStorage.setItem("rez1",rezult1);
          }
        );
        $("#carTwo").animate(
          {
            left: RaceTrackWidth
          },
          RaceTime2,
          function() {
            CheckIfComplete();
            $("#finish").css("display", "block");
            let rezult2 = $(".rezultat2").text(); 

            $(".rezultat2").append(
              "Finished in " +
                Place +
                " place whith the time of " +
                RaceTime2 +
                " milliseconds <br>"
              
            );
            localStorage.setItem("rez2", rezult2);
          }
        );
      }
     
    }, 1000);
    $("#startOverBtn").attr("disabled", true);
    $("#raceBtn").attr("disabled", true);
  });

  $("#startOverBtn").click(function() {
    $("#carOne").css("left", "0");
    $("#carTwo").css("left", "0");
    $("#finish").css("display", "none");
    RaceTime1 = Math.floor(Math.random() * 5000 + 1);
    RaceTime2 = Math.floor(Math.random() * 5000 + 1);
  });
  $(".pastResults").css("display", "block");
  $(".pastResults").append(localStorage.getItem("rez1"));
  $(".pastResults").append(localStorage.getItem("rez2"));
 
});
