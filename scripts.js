document.addEventListener('DOMContentLoaded', function () {
    // Contact Us Modal
    $('#contactModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var modal = $(this);
    });

    // Change the project image based on text item click
    document.querySelectorAll('#why-we-are-best .text-item').forEach(function (item, index) {
        item.addEventListener('click', function () {
            var image = document.querySelector('#why-we-are-best .col-md-6 img');
            image.src = 'images/image' + (index + 5) + '.jpg'; // Assuming your images are named sequentially
        });
    });

    // Highlight company growth stats on hover
    document.querySelectorAll('#company-growth .stat').forEach(function (stat) {
        stat.addEventListener('mouseover', function () {
            stat.classList.add('highlighted');
        });
        stat.addEventListener('mouseout', function () {
            stat.classList.remove('highlighted');
        });
    });
});
$(document).ready(function() {
    // Initialize Slick Slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendDots: $('.dots'),
        customPaging: function(slider, i) {
            return '<div class="dot"></div>';
        }
    });

    // Hover effect for service items
    $('.service-item').hover(
        function() {
            const overlay = $(this).find('.service-overlay');
            const image = $(this).find('.service-image');
            overlay.css('opacity', '1');
            image.css('opacity', '0.3');
        },
        function() {
            const overlay = $(this).find('.service-overlay');
            const image = $(this).find('.service-image');
            overlay.css('opacity', '0');
            image.css('opacity', '1');
        }
    );

    // Hover effect for "Our Project" text items
    $('.text-item').hover(
        function() {
            $(this).css({
                'background-color': 'red',
                'color': 'white'
            });
        },
        function() {
            $(this).css({
                'background-color': '',
                'color': ''
            });
        }
    );

    // Update dots on slide change
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        const dots = $('.dot');
        dots.removeClass('active');
        dots.eq(nextSlide).addClass('active');
    });

    // Initialize first dot as active
    $('.dot').eq(0).addClass('active');
});
$(document).ready(function() {
    // Initialize Slick Slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $('.dot-nav')
    });

    // Update dots on slide change
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        const dots = $('.dot-nav').find('.dot');
        dots.removeClass('active');
        dots.eq(nextSlide).addClass('active');
    });
});