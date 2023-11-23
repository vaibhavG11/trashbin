 /*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045

*/
// minJumps

function minJumps(arr, n) 
{ 
 
	if (n == 1) 
		return 0; 


	let res = Number.MAX_VALUE; 
	for (let i = n - 2; i >= 0; i--)
	 { 
		if (i + arr[i] >= n - 1) 
		{ 
			let sub_res = minJumps(arr, i + 1)
			if (sub_res != Number.MAX_VALUE) 
				res = Math.min(res, sub_res + 1)
		} 
	} 

	return res
} 




	let arr = [ 1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9 ]
	let n = arr.length
	console.log("Minimum number of jumps to")
	console.log(" reach end is " + minJumps(arr, n))


