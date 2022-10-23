function bubbleSort(array) {
    var size = array.length;
  
    // run loops two times: one for walking throught the array
    // and the other for comparison
    for (var i = 0; i < size - 1; i++) {
      for (var j = 0; j < size - i - 1; j++) {
  
        // To sort in descending order, change > to < in this line.
        if (array[j] > array[j + 1]) {
  
          // swap if greater is at the rear position
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  
  var arr = [3, 5, -2, 14, -9, 30];
  bubbleSort(arr);
  console.log(arr);