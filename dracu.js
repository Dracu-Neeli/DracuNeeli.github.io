var i = 0;
var txt1 =
  "Hi Maaku.....!  <<                Aww you miss me... do you ..hehheheheeheheeh <<<                                                                                        > When I saw you for the first time < You were an ordinary person to me.  <<                  As the days gone < you got closer to me....Maaku! <<                           I don't know the reason why your thoughts always comes inside my mind...!                                                     > Everything about you is always intresting for me...!                     << When I see you everyday I fall in love and i jst laugh it off, but you smiled because you knew......kalli penne..                                                     > I know you miss me and its frustrating...but thanks for holding on to me maaku                    << its also uneasy for me....guess me are on the same ship afterall                                                            >I Love U <DUNDIMOOLE  |                  <<<<                 ";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
