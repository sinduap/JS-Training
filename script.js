var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

var colectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else collection[id][prop] = value;
  return collection;
}

// Function is Even
function isEven(x) {
  if (x % 2 === 0) {
    return "even";
  } else return "uneven";
}

isEven(31);

// Function Factorial
function factorial(num) {
  var result = 1;
  for (i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Function Kebab to Snake
function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}

// Higher order function
function sing() {
  console.log("La la la la la");
  console.log("Hu hu hu hu hu");
}
setInterval(sing, 1000);

// Sama dengan berikut ini
setInterval(function () {
  console.log("La la la la la");
  console.log("Hu hu hu hu hu");
}, 1000);

// Print reverse sebuah array
function printReverse(arr) {
  return arr.reverse();
}

// Print reverse sebuah string
function printReverse(str) {
  return str.split("").reverse().join("");
}

// is Uniform sebuah array
function isUniform(arr) {
  var first = arr[0];
  var status;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

// Sum Array Function
function sum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Sum array function dengan for Each
function sum(arr) {
  var total = 0;
  arr.forEach(function (e) {
    total += e;
  });
  return total;
}

// Menemukan angka terendah pada Array
function max(arr) {
  return Math.max.apply(null, arr);
}

// Menemukan angka terendah pada Array dengan menggunakan for loop
function max(arr) {
  var max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// Membuat function forEach
function myForEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

var colors = ["red", "blue", "yellow"];

//Execute
myForEach(colors, function (color) {
  console.log(color);
});

//Create method to array prototype object
Array.prototype.myForEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

//Buat method di object
var comments = {};
comments.data = ["Yuuhuuu", "Bagus banget nih", "Biasa aja sih"];
comments.print = function () {
  for (var i = 0; i < this.data.length; i++) {
    console.log(this.data[i]);
  }
};

//Dengan forEach
comments.print = function () {
  this.data.forEach(function (e) {
    console.log(e);
  });
};

var isBlue = false;
setInterval(function () {
  if (isBlue) {
    body.style.background = "white";
  } else {
    body.style.background = "blue";
  }
  isBlue != isBlue;
}, 1000);

//While loop
var myAray = [];
var i = 0;
while (i < 5) {
  myAray.push(i);
  i++;
}

//For Loop
var ourArray = [];
for (var i = 0; i < 5; i++) {
  console.log(ourArray);
}

//Example

function multiplyAll(arr) {
  var sum = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      sum *= arr[i][j];
    }
  }
  return sum;
}

var product = multiplyAll([1, 2], [3, 4], [5, 6, 7]);

// do while loop
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

//Profile Lookup

var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Cases", "Violine", "Smoke"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", " Foxes"],
  },
];

function lookUp(name, prop) {
  for (i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName) {
      return contacts[i][prop] || "Prop false";
    }
  }
  return "Not Found";
}

// Generate random number between 0 ~ 1
function randomFraction() {
  return Math.random();
}

// Generate random number between 0 ~ 20
function randomFraction() {
  return Math.floor(Math.random() * 20);
}

// Generate random number between 10 ~ 20
function ourRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

ourRandomRange(10, 20);

// Convert str to integer
function strToInt(str) {
  return parseInt(str);
}

strToInt("20");

// Radix parse integer
function convertToInteger(str) {
  // arg 2 = binary
  return parseInt(str, 2);
}

convertToInteger("00101");

//Ternary(Conditional) Operator
function checkEqual(a, b) {
  return a === b ? true : false;
}

//Nested Ternary Operator
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

//Prevent Object Mutation using const + object.freeze
function freeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
}

const PI = freeObj();

//Arrow function only apply to anonymous function
var anonFunc = function () {
  return new Date();
};

var anonFunc = () => new Date();

/////example 2 arrow function with parameters

var myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};

var myConcat = (arr1, arr2) => arr1.concat(arr2);

//

const realNumberArray = [4, 5.6, -9.6, 3.14, 42, 6, 8.34, -2];

//

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//

const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

//

const result = {
  success: ["max-lenght", "no-amd", "prefer-arrow-function"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-idblacklist", "no-dub-keys"],
};

function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
