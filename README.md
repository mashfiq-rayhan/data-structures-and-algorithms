<h1 style="display: flex; align-items: center; justify-content: center; gap: 10px;" align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thealgorithms/thealgorithms-original.svg" alt="Docker Logo" width="50">
  <span style="color:#007acc; font-size:1.5em;">Introduction to Algorithms</span>
</h1>

> **<div align="center"><span style="color:#0f00bd; font-size:1.5rem;">02. Getting Started</span></div>**

> #### <span style="color:#78162d; font-size:1.2rem;">2.1 Insertion sort</span>

```sh
INSERTION-SORT(A, n)
1. for i = 1 to A.length - 1
2.     key = A[i]
3.     // Insert A[i] into the sorted subarray A[1 : i – 1].
4.     j = i – 1
5.     while j >= 0 and A[j] > key
6.         A[j + 1] = A[j]
7.         j = j – 1
8.     A[j + 1] = key
```

```js
const A = [5, 2, 4, 6, 1, 3];
const n = A.length;

function insertionSort(A, n) {
  for (let i = 1; i < n; i++) {
    const key = A[i];
    let j = i - 1;
    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j];
      j -= 1;
    }
    A[j + 1] = key;
  }
  return A;
}

const sorted = insertionSort(A, n);
console.log(sorted);
```
#### <span style="color:#78162d; font-size:1.2rem;">Exercises</span>
#### <span style="color:#78162d; font-size:1.2rem;">2.1-1</span>
```js
const A = [31, 41, 59, 26, 41, 58];
const n = A.length;

function insertionSort(A, n) {
  for (let i = 1; i < n; i++) {
    const key = A[i];
    let j = i - 1;
    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j];
      j -= 1;
    }
    A[j + 1] = key;
  }
  return A;
}

const sorted = insertionSort(A, n);
console.log(A);
```

#### <span style="color:#78162d; font-size:1.2rem;">2.1-2</span>
```sh
SUM-ARRAY(A, n)
1. sum = 0
2. for i = 1 to n
3.     sum = sum + A[i]
4. return sum
```

```js
const A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = A.length;

function sumArray(A, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += A[i];
  }
  return sum;
}

const sumUp = sumArray(A, n);
console.log(sumUp);
```

#### <span style="color:#78162d; font-size:1.2rem;">2.1-3</span>

```js
const A = [31, 41, 59, 26, 41, 58];
const n = A.length;

function reverseSort(A, n) {
  for (let i = 1; i < n; i++) {
    const key = A[i];
    let j = i - 1;
    while (j >= 0 && A[j] < key) {
      A[j + 1] = A[j];
      j -= 1;
    }
    A[j + 1] = key;
  }
  return A;
}

const revSort = reverseSort(A, n);
console.log(revSort);
```
#### <span style="color:#78162d; font-size:1.2rem;">2.1-4</span>

```js
const A = [31, 41, 59, 26, 41, 58];
const n = 59;

function linearSearch(A, n) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] === n) {
      return i;
    }
  }
  return 'NIL'
}

const findNum = linearSearch(A, n);
console.log(findNum);
```