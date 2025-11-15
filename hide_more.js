(function () {
    'use strict';
  
    const style = document.createElement('style');

    style.innerHTML = `
        .full-start__button.selector.button--options {
            display: none;
        }
    `;

    document.head.appendChild(style);
})();