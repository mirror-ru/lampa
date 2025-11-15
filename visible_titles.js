(function () {
    'use strict';
  
    const style = document.createElement('style');

    style.innerHTML = `
        .full-start-new__buttons .full-start__button:not(.focus) span {
            display: block;
        }
    `;

    document.head.appendChild(style);
})();