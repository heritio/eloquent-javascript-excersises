This is the loop triangle
let triangle = "";

do {
  triangle += "#";
  console.log(triangle);
} while (triangle.length < 7);
*/

//This is the fizzBuzz algorithm challenge
/*
let container = 1;
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    container = "FizzBuzz";
  } else if (i % 3 === 0) {
    container = "Fizz";
  } else if (i % 5 === 0) {
    container = "Buzz";
  } else {
    container = i;
  }
  console.log(container);
}
*/

//ChessBoard algorithm
/*
let size = 8;
let chessBord = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      chessBord += " ";
    } else {
      chessBord += "#";
    }
  }
  chessBord += "\n";
}
console.log(chessBord);
*/
/*
function multi(factor) {
  return (num) => num * factor;
}
let twice = multi(2);
console.log(twice(2));
*/

//Recursion
/*
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 2));
*/
/*
function findSolutionHistory(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

console.log(findSolutionHistory());
*/

//Exercise-------
//Minimum function
/*
function min(a, b) {
  return Math.min(a, b);
}

console.log(min(0, -10));
*/
//Recursion
/*
function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num % 2 == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}

console.log(isEven(3));
*/
//Bean counting --> this function counts how many uppercase Bs there are in a string
/*
function countBs(str) {
  let count = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      count += str[i];
    }
  }
  return count.length;
}
console.log(countBs("BabB"));
*/
//The next function counts like countBs but have an argument to decide what the character is
/*
function countChar(str, char) {
  let count = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      count += str[i];
    }
  }
  return count.length;
}
console.log(countChar("kakkerlak", "k"));
*/

//Data structeres- Objects and arrays
/*
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};

console.log(day1.events[0]);
*/
//delete day1.squirrell deletes thee squirrel property

// console.log(Object.keys({ x: 1, y: 2, z: 3 }));
/*
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { c: 3, d: 4 });
console.log(objectA);
*/
/*
let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true,
  },
];
*/
/*
//
let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);

addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal);
