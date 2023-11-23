/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045
*/

function linearSearch(arr, target) 
{
  for (let i in arr) 
  {
    if (arr[i] === target) 
    return i
  }
  return -1
}
// if element is not found then return -1 otherwise returning that index
console.log(linearSearch([1, 2, 3, 4], 1))
console.log(linearSearch([1, 2, 3, 4], 4)) 
console.log(linearSearch([1, 2, 3, 4], 6)) 
console.log(linearSearch([3, 4, 1, 6, 3], 6))