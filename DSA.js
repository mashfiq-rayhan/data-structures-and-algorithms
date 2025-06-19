// Introduction to Algorithms

// // 02. Getting Started

// 2.1 Insertion sort
// const A = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// const n = A.length;

// function insertionSort(A, n) {
//   for (let i = 1; i < n; i++) {
//     const key = A[i];
//     let j = i - 1;
//     while (j >= 0 && A[j] > key) {
//       A[j + 1] = A[j];
//       j -= 1;
//     }
//     A[j + 1] = key;
//   }
//   return A;
// }

// const sorted = insertionSort(A, n);
// console.log(sorted);

// Exercises
// 2.1-1

// const A = [31, 41, 59, 26, 41, 58];
// const n = A.length;

// function insertionSort(A, n) {
//   for (let i = 1; i < n; i++) {
//     const key = A[i];
//     let j = i - 1;
//     while (j >= 0 && A[j] > key) {
//       A[j + 1] = A[j];
//       j -= 1;
//     }
//     A[j + 1] = key;
//   }
//   return A;
// }

// const sorted = insertionSort(A, n);
// console.log(A);

// 2.1-2
// SUM-ARRAY(A, n)
// 1. sum = 0
// 2. for i = 1 to n
// 3.     sum = sum + A[i]
// 4. return sum

// const A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const n = A.length;

// function sumArray(A, n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += A[i];
//   }
//   return sum;
// }

// const sumUp = sumArray(A, n);
// console.log(sumUp);

// 2.1-3
// const A = [31, 41, 59, 26, 41, 58];
// const n = A.length;

// function reverseSort(A, n) {
//   for (let i = 1; i < n; i++) {
//     const key = A[i];
//     let j = i - 1;
//     while (j >= 0 && A[j] < key) {
//       A[j + 1] = A[j];
//       j -= 1;
//     }
//     A[j + 1] = key;
//   }
//   return A;
// }

// const revSort = reverseSort(A, n);
// console.log(revSort);

// 2.1-4
// const A = [31, 41, 59, 26, 41, 58];
// const n = 59;

// function linearSearch(A, n) {
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === n) {
//       return i;
//     }
//   }
//   return 'NIL'
// }

// const findNum = linearSearch(A, n);
// console.log(findNum);
