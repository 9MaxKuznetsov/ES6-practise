'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var greet = function greet(name) {
    return console.log(('Hello  ' + name).toUpperCase());
};

greet('Bill');

var createEmail = function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        From: ' + from + '\n        Subject: ' + subject + '\n        Message: ' + message + '\n    ');
};

createEmail('john@gmail.com', 'max@gmail.com', 'Hello', 'How r u doing?');

var add = function add(x, y) {
    return console.log(x + ' + ' + y + ' = ' + (x + y));
};

add(5, 2);

var name = 'Bill';

var upperName = function upperName(literals) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    return literals[0] + values[0].toUpperCase();
};

console.log(upperName(_templateObject, name));