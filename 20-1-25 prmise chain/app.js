
// Promise Chaining using then()


// // Creates a promise that resolves after 1 second
// function asyncOperation1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Operation 1');
//       resolve('Result of operation 1');
//     }, 1000);
//   });
// }

// // Creates a promise that resolves after 2 seconds
// function asyncOperation2(previousResult) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Operation 2');
//       resolve(`${previousResult}, Result of operation 2`);
//     }, 2000);
//   });
// }

// // Creates a promise that resolves after 1.5 seconds
// function asyncOperation3(previousResult) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Operation 3');
//       resolve(`${previousResult}, Result of operation 3`);
//     }, 1500);
//   });
// }

// // Chaining the promises using then
// asyncOperation1()
//   .then((result1) => {
//     return asyncOperation2(result1);
//   })
//   .then((result2) => {
//     return asyncOperation3(result2);
//   })
//   .then((finalResult) => {
//     console.log('Final Result:', finalResult);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });



// Promise using promise all

// // Function that returns a promise that resolves after a given time
// function asyncOperation(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (value) {
//         resolve(`Resolved: ${value}`);
//       } else {
//         reject('Rejected: No value provided');
//       }
//     }, delay);
//   });
// }

// // Create an array of promises
// const promises = [
//   asyncOperation('Operation 1', 1000),
//   asyncOperation('Operation 2', 2000),
//   asyncOperation(null, 1500), // This will cause a rejection
// ];

// // Use Promise.all to handle all promises
// Promise.all(promises)
//   .then((results) => {
//     console.log('All promises resolved:', results);
//   })
//   .catch((error) => {
//     console.error('One or more promises rejected:', error);
//   })
//   .finally(() => {
//     console.log('Promise.all operation completed.');
//   });



// Promise using promise race

// // Function that returns a promise that resolves after a given time
// function asyncOperation(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (value) {
//         resolve(`Resolved: ${value}`);
//       } else {
//         reject('Rejected: No value provided');
//       }
//     }, delay);
//   });
// }

// // Create an array of promises
// const promises = [
//   asyncOperation('Operation 1', 1000),
//   asyncOperation('Operation 2', 2000),
//   asyncOperation(null, 1500), // This will cause a rejection
// ];

// // Use Promise.race to handle the promises
// Promise.race(promises)
//   .then((result) => {
//     console.log('First resolved promise:', result);
//   })
//   .catch((error) => {
//     console.error('First rejected promise:', error);
//   })
//   .finally(() => {
//     console.log('Promise.race operation completed.');
//   });




//promise using promise allsettelled 


// Function that returns a promise that resolves after a given time
function asyncOperation(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`Resolved: ${value}`);
      } else {
        reject('Rejected: No value provided');
      }
    }, delay);
  });
}
// Create an array of promises
const promises = [
  asyncOperation('Operation 1', 1000),
  asyncOperation('Operation 2', 2000),
  asyncOperation(null, 1500), // This will cause a rejection
];

// Use Promise.allSettled to handle the promises
Promise.allSettled(promises)
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index + 1} resolved with:`, result.value);
      } else {
        console.error(`Promise ${index + 1} rejected with:`, result.reason);
      }
    });
  })
  .finally(() => {
    console.log('Promise.allSettled operation completed.');
  });