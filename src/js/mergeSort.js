function merge(left, right) {
  let sortedArr = []; // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  // use spread operator and create a new array, combining the three arrays
  console.log([...sortedArr, ...left, ...right]);
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  // the base case is array length <=1
  if (arr.length <= 1) {
    return arr;
  }
  
  const half = Math.floor(arr.length / 2);
  const left = arr.splice(0, half); // the first half of the array
  const right = arr;

  return merge(mergeSort(left), mergeSort(right));
}
