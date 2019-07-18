(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu')
                .toggleClass('menu_state_open');
        });

        $('.menu__links_item').on('click', function() {
            // do something

            $(this).closest('.menu')
                .removeClass('menu_state_open');
        });
    });
})(jQuery);
