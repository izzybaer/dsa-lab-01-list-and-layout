'use strict';

const expect = require('expect');
const List = require('../list.js');


describe('testing list', () => {
  it('should have a length of zero', () => {
    let list = new List();
    expect(list.length).toEqual(0);
  });
  describe('testing push', () => {
    it('should append a value to the list', () => {
      let list = new List;

      list.push('weeeee ooop');
      expect(list[0]).toEqual('weeeee ooop');
      expect(list.length).toEqual(1);

      list.push('lulwat');
      expect(list[1]).toEqual('lulwat');
      expect(list.length).toEqual(2);

    });
  });

  describe('test pop', () => {
    it('should remove a value', () => {
      let list = new List;
      list.push(1);
      list.push(2);
      list.push(3);

      let result = list.pop();
      expect(result).toEqual(3);
      expect(list.length).toEqual(2);
      expect(list[2]).toBe(undefined);

      list = new List();
      result = list.pop();
      expect(result).toEqual(undefined);
      expect(list.length).toEqual(0);
    });
  });

    describe('testing reduce', () => {
      it('should return an array or a single value', () => {
        let list = new List;
        list = [0, 1, 2];
        expect();
      });
    });
  });

  describe('testing slice', () => {
    it('should return a copy of a portion of an array into a new array object', () => {
      let list = new List;
      list = [3,4,5,6,7,8];
      expect(list.slice(2, 5)).toEqual([5, 6, 7]);
    });
  });
});

// describe('testing filter', () => {
//   it('should return an array that passes the callback', () => {
//     function greaterThanFive(n) {
//       return n > 5;
//     }
//     let list = new List;
//     list = [0, 1, 2, 3, 4, 5, 6, 7];
//     expect(list.filter(greaterThanFive)).toEqual([6, 7]);
//   });
//   it('should return an array of strings', () => {
//     function arrString(str) {
//       if (str === 'Izzy') return str;
//     }
//     let list = new List;
//     list = ['Dustin', 'Brian', 'Izzy'];
//     expect(list.filter(arrString)).toEqual(['Izzy']);
//   })
// });
