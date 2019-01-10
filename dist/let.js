'use strict';

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
    button = buttons[i];

    button.textContent = i;
    button.addEventListener('click', function () {
        console.log(i);
    });
};

for (var i = 0; i < buttons.length; i++) {
    var button;

    _loop(i);
}