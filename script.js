var slideIndex = 1; /*global varriable det er den her variable der er n*/

showImage(slideIndex);

function plusIndex(n){     /*højre og venstre pil kalder plusindex*/
  showImage(slideIndex += n); /*slideindex=slideindex+n */
}

function currentSlide(n){     /*funktionen gør at man kan trykke på cirklen for at komme hen til det ønskede billede*/
  showImage(slideIndex = n);
}


function showImage(n) {
  var slide = document.getElementsByClassName("slides") /*dette virker som en array med de 4 billeder som er brugt i slideshowet*/
  var dots = document.getElementsByClassName("dots")
  if (n > slide.length) { slideIndex = 1}; /*hvis n er større end slide length(slide length er 4) så går pilen tilbage til  1*/
  if (n < 1) {slideIndex = slide.length};  /*hvis n er mindre end 1, så går pilen tilbage til billede 4 så bliver slideindex = med slidelength(slideLength er 4) det er hvis værdien går i negativ*/
                                            /*disse 2 if statesmentes giver en cirkulær følelse til vores image slider*/
  for (var i = 0; i < slide.length; i++) { /* dette er et for loop hvor i starter i 0 vores condition er i mindre end slide length. slide virker som en array hvilket betyder at alle bliver usynlige*/
    slide[i].style.display = "none"; /* denne linje gør at man ikke kan se nogle af billederne*/
  };
  slide[slideIndex-1].style.display = "block"; /*denne linje gør at det først billede altid vil være block( altså ikke usynlig)*/

  dots[slideIndex-1].className += " active"; /*Dette bruger variablen dots til at vise hvilken en af billederne man er inde på, dog bliver alle active på samme tid*/

  for (var i = 0; i < dots.length; i++) {      /*dette er et for loop der gør at alle cirklerne ikke er aktiver på en gang */
    dots[i].className = dots[i].className.replace(" active",""); /*når den her funktion finder en active class bliver den fyldt ud med ingenting*/
  };
    dots[slideIndex-1].className += " active";
}

/*video*/

function playPause(btn,vid){
	var vid = document.getElementById(vid);
	if(vid.paused){
		vid.play();
		btn.innerHTML = "Pause";
	} else {
		vid.pause();
		btn.innerHTML = "Afspil";
	}
}
/*Kommentar sektion*/



/*Progress Bar*/

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
