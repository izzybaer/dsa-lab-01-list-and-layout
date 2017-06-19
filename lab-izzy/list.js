'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
};

List.prototype.pop = function() {
  if (this.length < 1) return;
  let result = this[this.length - 1];
  delete this[this.length - 1]
  this.length--;
  return result;
};

List.prototype.reduce = function (callback, val) {
  let result, start;

  if(!val) {
    result = this[0];
    start = 1;
  } else {
    result = val;
    start = 0;
  }
  for(var i = start; i < this.length; i++) {
    result = callback(result, this[i]);
  }
  return result;
};

List.prototype.slice = function (arg, arg1) {
  let result = [];
  for (var i = arg; i < arg1; i++) {
    result.push(this[i]);
  }
  return result;
};
