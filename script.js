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
