/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045
*/

function binarySearch(arr, target) 
{
  let start = 0
  let end = arr.length - 1
  while (start <= end) 
  {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] < target) 
    {
      // Search the right half
      start = middle + 1
    } 
    else if (arr[middle] > target) 
    {
      // Search the left half
      end = middle - 1
    } 
    else if (arr[middle] === target) 
    {
      // Found target
      return middle
    }
  }
  // Target not found
  return -1
}
console.log(binarySearch([1, 2, 3, 4], 1)) // 1
console.log(binarySearch([1, 2, 3, 5, 9], 4)) // -1
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([0, 3], 3)) // 1