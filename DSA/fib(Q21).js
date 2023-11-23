/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045

*/
// Fibnoacci Series



function fib(n)
{
	let a = 0, b = 1, c, i
	if( n == 0)
		return a
	for(i = 2; i <= n; i++)
	{
	c = a + b;
	a = b;
	b = c;
	}
	return b;
}



	let n = 6;
	
	console.log(fib(n))


