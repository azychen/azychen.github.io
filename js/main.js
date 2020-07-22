$(document).ready(function () {

    var currSection = 0;
    var maxSection;

    // // avatar notification
    // $(".avatar").on("click", function () {
    //     let phrases = ["Ow!", "Stop that!", "C'mon man, that hurts!"];
    //     alert(phrases[Math.floor(Math.random() * 2.99)]);
    // });

    // // dropdown menu
    // $('[data-trigger="dropdown"]').on('mouseenter', function () {
    //     var submenu = $(this).parent().find('.submenu');
    //     submenu.fadeIn(300);

    //     $('.profile-menu').on('mouseleave', function () {
    //         submenu.fadeOut(300);
    //     });
    // });

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