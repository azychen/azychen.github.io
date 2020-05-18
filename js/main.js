$(document).ready(function () {

    var currSection = 0;
    var maxSection;

    // avatar notification
    $(".avatar").on("click", function () {
        let phrases = ["Ow!", "Stop that!", "C'mon man, that hurts!"];
        alert(phrases[Math.floor(Math.random() * 2.99)]);
    });

    // dropdown menu
    $('[data-trigger="dropdown"]').on('mouseenter', function () {
        var submenu = $(this).parent().find('.submenu');
        submenu.fadeIn(300);

        $('.profile-menu').on('mouseleave', function () {
            submenu.fadeOut(300);
        });
    });

    $(document).keydown(
        function (e) {

            function getMaxSection() {
                var i = 0;
                while ($("#section" + i.toString()).length !== 0) {
                    i++;
                }
                maxSection = i;
            }

            function incr() {
                if (currSection < maxSection) {
                    currSection++;
                }
            }

            function decr() {
                if (currSection > 0) {
                    currSection--;
                }
            }

            getMaxSection();

            if (e.keyCode == 37 || e.keyCode == 38) {
                decr();
            } else if (e.keyCode == 39 || e.keyCode == 40) {
                incr();
            }

            $([document.documentElement, document.body]).animate({
                scrollTop: $("#section" + currSection.toString()).offset().top - $("#section" + currSection.toString()).height()
            }, 200);
        }
    );
});