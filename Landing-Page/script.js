function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '0px';
}

function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '-100rem';
}


$(document).ready(function(){
    // Function to check if an element is in viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to trigger animations when an element is in viewport
    function triggerAnimation() {
        $(".det, .cta").each(function(){
            if (isInViewport(this)) {
                $(this).animate({
                    opacity: 1,
                    marginLeft: "0px"
                }, 1000);
            } else {
                $(this).stop(true).css({ opacity: 0, marginLeft: "-50px" });
            }
        });

        $("#what-we-do .flex, #ad-sect, #about .grid-box").each(function(){
            if (isInViewport(this)) {
                $(this).animate({
                    opacity: 1,
                    marginTop: "0px"
                }, 1000);
            } else {
                $(this).stop(true).css({ opacity: 0, marginTop: "-50px" });
            }
        });
    }

    // Initial trigger on page load
    triggerAnimation();

    // Trigger animations on scroll
    $(window).on("scroll", function() {
        triggerAnimation();
    });
});
