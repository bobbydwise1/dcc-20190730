# Daily Coding Problem 2019-07-30

####  _Good morning! Here's your coding interview problem for today._

_This problem was asked by Google._

_Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k._

_For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:_

    10 = max(10, 5, 2)
    7 = max(5, 2, 7)
    8 = max(2, 7, 8)
      8 = max(7, 8, 7)

_Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them._
