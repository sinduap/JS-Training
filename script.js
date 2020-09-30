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
    console.log((result = result * i));
  }
  return result;
}
