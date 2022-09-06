let defaulArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let text = $('<p>HELLO THERE</p>')

// $('.animation-zone').append('<div><p>sadasd</p></div>')

$(document).ready(function () {
  
  for (let i = 0; i < defaulArray.length; i++) {
    let div = $('<div></div>')
    $('.animation-zone').append(div.append(`<p>${defaulArray[i]}</p>`));
  }

  sort(defaulArray);
});
