$(document).ready(function () {

    var current = 0,
        slides = document.getElementsByClassName("slides");

    setInterval(function () {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
        }
        current = (current != slides.length - 1) ? current + 1 : 0;
        slides[current].style.opacity = 1;
    }, 10000);

    var currSection = 0;
    var maxSection;
  
    $(document).keydown(
        function (e) {
            if (e.keyCode == 9) {
                e.preventDefault();
            }

            function getMaxSection() {
                var i = 0;
                while ($("#section" + i.toString()).length !== 0) {
                    i++;
                }
                maxSection = i;
            }

            getMaxSection();

            if ((e.keyCode == 37 || e.keyCode == 38) && currSection > 0) {
                currSection--;
            } else if ((e.keyCode == 39 || e.keyCode == 40) && currSection < maxSection) {
                currSection++;
            }

            $([document.documentElement, document.body]).animate({
                scrollTop: $("#section" + currSection.toString()).offset().top - $("#section" + currSection.toString()).height() / 4
            }, 200);
        }
    );

});