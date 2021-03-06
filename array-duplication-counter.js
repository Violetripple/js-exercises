/**
 * 2018 William
 * Array duplication counter
 * Count duplicate elements in a array
 */

'use strict';

const caseArr = [1, 2, 2, 3, 3, 3];
const caseArr2 = ['Hello', 'Hello', 'hello', 'j', 'j', 'k'];

function countDup(arr = []) {
  const set = new Set(arr);
  const uniqueArr = Array.from(set);
  if (uniqueArr.length === arr.length) return;

  const map = new Map();
  uniqueArr.forEach((uniqueVal) => {
    let n = 0;
    arr.forEach((val) => {
      if (val === uniqueVal) {
        n++;
        // Optional delete
        delete arr[index];
      }
    });
    map.set(uniqueVal, n);
  });
  console.log('newMap ', map);
  for (const [key, val] of map) {
    console.log(key, val);
  }
}

countDup(caseArr);
countDup(caseArr2);
