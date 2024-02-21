//your JS code here. If required.
// Define the function to return a promise after 3 seconds
function processData(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });
}

// Filter odd numbers from the array
function filterOddNumbers(array) {
  return array.filter(num => num % 2 === 0);
}

// Multiply even numbers by 2
function multiplyEvenNumbers(array) {
  return array.map(num => num * 2);
}

// Get the output div
const output = document.getElementById("output");

// Initial array
const initialArray = [1, 2, 3, 4];

// Chain promises
processData(initialArray)
  .then(array => {
    // Filter odd numbers after 1 second
    setTimeout(() => {
      const filteredArray = filterOddNumbers(array);
      output.textContent = filteredArray.join(', ');
    }, 1000);
    return array;
  })
  .then(array => {
    // Multiply even numbers by 2 after 2 seconds
    setTimeout(() => {
      const multipliedArray = multiplyEvenNumbers(array);
      output.textContent = multipliedArray.join(', ');
    }, 2000);
  });
