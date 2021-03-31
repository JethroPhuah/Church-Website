var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var bckgrd = document.getElementsByClassName("backgroundimg");
          var dots = document.getElementsByClassName("dot");
          if (n==undefined){n = ++slideIndex} /*comes hand in hand with the auto*/
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < bckgrd.length; i++) {
              bckgrd[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          bckgrd[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active"; /* the clicked button will have the class name of active. Must have space cos you are adding one more class */
          setTimeout(showSlides, 10000);
        }

        function arrow(a) {
            var i;
            var arrowi = document.getElementsByClassName("scroll")[0];
            
            for (i = 0; i < 4; i++) {
            arrowi.getElementsByClassName("arrowindividual")[i].style.display = "none";  
            }
            arrowi.getElementsByClassName("arrowindividual")[a-1].style.display = "inline-block"; 
        }

        function changetoX(x) {
            x.classList.toggle("change");
        }

        window.onscroll = function(){scrollFunction()};

        function scrollFunction(){
            if ((document.body.scrollTop > 400 && document.body.scrollTop < 800) || (document.documentElement.scrollTop > 400 && document.documentElement.scrollTop < 800)) {
                    document.getElementsByClassName("arrowindividual")[0].style.display = "inline-block";
                    document.getElementsByClassName("arrowindividual")[1].style.display = "none";
                } 
            
            else if ((document.body.scrollTop > 800 && document.body.scrollTop < 2000) || (document.documentElement.scrollTop > 800 && document.documentElement.scrollTop < 2000)) {
                document.getElementsByClassName("arrowindividual")[0].style.display = "none";
                document.getElementsByClassName("arrowindividual")[1].style.display = "inline-block";
                document.getElementsByClassName("arrowindividual")[2].style.display = "none";}
            
            else if ((document.body.scrollTop > 2000 && document.body.scrollTop < 2600) || (document.documentElement.scrollTop > 2000 && document.documentElement.scrollTop < 2600)) {
                document.getElementsByClassName("arrowindividual")[0].style.display = "none";
                document.getElementsByClassName("arrowindividual")[1].style.display = "none";
                document.getElementsByClassName("arrowindividual")[2].style.display = "inline-block";
                document.getElementsByClassName("arrowindividual")[3].style.display = "none";
            }
            else if ((document.body.scrollTop > 2600 && document.body.scrollTop < 3200) || (document.documentElement.scrollTop > 2600 && document.documentElement.scrollTop < 3200)) {
                document.getElementsByClassName("arrowindividual")[0].style.display = "none";
                document.getElementsByClassName("arrowindividual")[1].style.display = "none";
                document.getElementsByClassName("arrowindividual")[2].style.display = "none";
                document.getElementsByClassName("arrowindividual")[3].style.display = "inline-block";
            }
            else{document.getElementsByClassName("arrowindividual")[0].style.display = "none";
            }
            }