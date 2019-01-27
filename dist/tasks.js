"use strict";

var searchPairs = function searchPairs(array, N) {
  var getAnotherNumber = function getAnotherNumber() {
    array.forEach(function (number) {
      var anotherNumber = N - number;
      return anotherNumber;
    });
  };
  console.log(getAnotherNumber);
};

var arr = [1, 2, 6, 5, 3, 4, 7, 8];
var k = 5;

console.log(searchPairs(arr, k));