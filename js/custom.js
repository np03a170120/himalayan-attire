function openSearch() {
    $(".myOverlay").fadeIn("slow");
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlay").style.animation =
        "mynewmove 0.5s forwards";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
$(".closebtn").click(function() {
    $("#profile").removeClass("open");
    $("#cart").removeClass("open");
    $("#wishlist").removeClass("open");
    $("body").removeClass("open-opacity");
});

$(document).ready(function() {
    // profile
    $(".check__profile").click(function() {
        $("#profile").addClass("open");
        $("body").addClass("open-opacity");
    });

    const $menu = $("#profile");
    $(document).mouseup((e) => {
        if (!$menu.is(e.target) && // if the target of the click isn't the container...
            $menu.has(e.target).length === 0
        ) {
            // ... nor a descendant of the container
            $menu.removeClass("open");
            $("body").removeClass("open-opacity");
        }
    });
    // cart
    $(".check__cart").click(function() {
        $("#cart").addClass("open");
        $("body").addClass("open-opacity");
    });
    const $cart = $("#cart");
    $(document).mouseup((e) => {
        if (!$cart.is(e.target) && // if the target of the click isn't the container...
            $cart.has(e.target).length === 0
        ) {
            // ... nor a descendant of the container
            $cart.removeClass("open");
            $("body").removeClass("open-opacity");
        }
    });

    // wishlist

    $(".check__wishlist").click(function() {
        $("#wishlist").addClass("open");
        $("body").addClass("open-opacity");
    });
    const $wishlist = $("#wishlist");
    $(document).mouseup((e) => {
        if (!$wishlist.is(e.target) && // if the target of the click isn't the container...
            $wishlist.has(e.target).length === 0
        ) {
            // ... nor a descendant of the container
            $wishlist.removeClass("open");
            $("body").removeClass("open-opacity");
        }
    });

    // MAIN BANNER SINGLE
    $(".main-banner-slider").slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autplaySpeed: 2000,
    });

    // brand slider

    $(".brand-slider").slick({
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autplaySpeed: 5000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
    // instaslider
    $(".instagram-slider").slick({
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autplaySpeed: 8000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});