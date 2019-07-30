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

/*

how many subarrays are there?  If we call it f(array_size,k)...

f(6,1) = 6
f(6,2) = 5
f(6,3) = 4
f(6,4) = 3
f(6,5) = 2
f(6,5) = 1

f(5,1) = 5
f(5,2) = 4
f(5,3) = 3
f(5,4) = 2
f(5,5) = 1
etc...

The amount of subarrays is array_size+1-k
*/

const values = (yourArray, yourInteger) => {
  if ((0 >= yourInteger) && (yourInteger >= yourArray.length)) {return 0}
  let output = [];
  for (i=0; i<yourArray.length+1-yourInteger; i++) {
    console.log('loop i: ',i)
    temp = 0;
    for (j=0; j<yourInteger; j++) {
      console.log('loop j: ',j)
      temp=temp+yourArray[i+j];
    };
      console.log('temp =', temp);
      output.push(temp);
    };
  return output;
}

let test = [10, 5, 2, 7, 8, 7];
console.log(values(test,3))

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
});
