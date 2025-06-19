<h1 style="display: flex; align-items: center; justify-content: center; gap: 10px;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thealgorithms/thealgorithms-original.svg" alt="Docker Logo" width="70">
  <span style="color:#007acc; font-size:1.5em;">Introduction to Algorithms</span>
</h1>

> **<div align="center"><span style="color:#0f00bd; font-size:1.5rem;">02. Getting Started</span></div>**

#### <span style="color:#78162d; font-size:1.2rem;">2.1 Insertion sort</span>
```plaintext
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
const A = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const n = A.length;
console.log(n);

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