function factorial(n) {
  if (n == 1 || n == 0) {
    return n;
  } else {
    console.log(n);
    return n * factorial(n - 1);
  }
}

function sum(n, e) {
  // no recursion
  // let result = 0;
  // for (let i = 0; i < n; i++) {
  //   result += n;
  // }
  // return result;

  // recursion
  let r = 0;
  if (e === 0) {
    return 1;
  } else {
    r = n * sum(n, e - 1);
    return r
  }
}

console.log(sum(10, 2));
