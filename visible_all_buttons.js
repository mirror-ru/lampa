(function () {
    'use strict';
  
    Lampa.Listener.follow('full', function (e) {
        if (e.type == 'complite') {
            $('.hide.buttons--container > div').prependTo('.full-start-new__buttons');
            $('.full-start__button.selector.button--play').remove(); 
        }
    });
})();