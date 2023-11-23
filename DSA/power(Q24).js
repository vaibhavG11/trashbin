/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045

*/
// Power Set 

	function printPowerSet(set, set_size) 
	{ 

		
		var pow_set_size = parseInt(Math.pow(2, set_size))
		var counter, j

		
		for (counter = 0; counter < pow_set_size; counter++) 
		{ 
			for (j = 0; j < set_size; j++) 
			{ 
			
				
				if ((counter & (1 << j)) > 0) 
                console.log(set[j]) 
			} 
			console.log("<br/>") 
		} 
	} 
		var set = [ 'a', 'b', 'c' ]
		printPowerSet(set, 3)


