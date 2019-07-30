/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

   10 = max(10, 5, 2)
   7 = max(5, 2, 7)
   8 = max(2, 7, 8)
   8 = max(7, 8, 7)

Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.
*/

const values = (yourArray, yourInteger) => {
  if ((0 >= yourInteger) && (yourInteger >= yourArray.length)) {return 0}
  let output = [];  //Use this if you want to store in order to show on HTML
  for (i=0; i<yourArray.length+1-yourInteger; i++) {
    temp = 0;
    for (j=0; j<yourInteger; j++) {
      if (temp < yourArray[i+j]) {temp = yourArray[i+j]}
    };
      console.log('Largest =', temp);  //Text only Output line
      output.push(temp);  //Use this if you want to store in order to show on HTML
    };
  return output;
}

$(document).ready(function() {
  $('#output-section-1').text([10, 5, 2, 7, 8, 7]);
  $('#output-section-2').text(values([10, 5, 2, 7, 8, 7],3));
});
