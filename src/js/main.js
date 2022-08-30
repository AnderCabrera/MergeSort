$(document).ready(function () {
  let defaulArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  for (let i = 0; i < $('.field').length; i++) {
    $('.field')[i].append(defaulArray[i]);
  }

  mergeSort(defaulArray);
});
