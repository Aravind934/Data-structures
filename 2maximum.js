"use strict";

const getSecondMaximun = (arr) => {
  let firstMax = 0,
    secondMax = -1;
  arr.forEach((item) => {
    if (item > firstMax) {
      secondMax = firstMax;
      firstMax = item;
    }
    if (item !== firstMax && item > secondMax) {
      secondMax = item;
    }
  });
  return secondMax;
};
