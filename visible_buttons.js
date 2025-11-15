(function () {
    'use strict';
    
    Lampa.Listener.follow('full', function (e) {
        if (e.type == 'complite') {
            $('.hide.buttons--container > div').prependTo('.full-start-new__buttons');
            $('.full-start__button.selector.button--play').remove();
            $('.full-start__button.selector.button--options').remove();
            $('.full-start-new__buttons .full-start__button:not(.focus) span').css('display', 'block');
        }
    });
})();