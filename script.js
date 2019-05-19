var slideIndex = 1; /*global varriable*/

showImage(slideIndex);

function plusIndex(n){
  showImage(slideIndex += n); /*slideindex=slideindex+n */
}

function currentSlide(n){     /*funktionen gør at man kan trykke på cirklen for at komme hen til det ønskede billede*/
  showImage(slideIndex = n);
}


function showImage(n) {
  var slide = document.getElementsByClassName("slides") /*dette virker som en array med de 4 billeder som er brugt i slideshowet*/
  var dots = document.getElementsByClassName("dots")
  if (n > slide.length) { slideIndex = 1}; /*hvis n er større end slide length(slide length er 4) så går pilen tilbage til  1*/
  if (n < 1) {slideIndex = slide.length};  /*hvis n er mindre end 1, så går pilen tilbage til billede 4 så bliver slideindex = med slidelength(slideLength er 4)*/
                                            /*disse 2 if statesmentes giver en cirkulær følelse til vores image slider*/
  for (var i = 0; i < slide.length; i++) {
    slide[i].style.display = "none"; /* denne linje gør at man ikke kan se nogle af billederne*/
  };
  slide[slideIndex-1].style.display = "block"; /*denne linje gør at det først billede altid vil være block( altså ikke usynlig)*/

  dots[slideIndex-1].className += " active"; /*Dette bruger variablen dots til at vise hvilken en af billederne man er inde på, dog bliver alle active på samme tid*/

  for (var i = 0; i < dots.length; i++) {      /*dette er et for loop der gør at alle cirklerne ikke er aktiver på en gang */
    dots[i].className = dots[i].className.replace(" active","");
  }
}
