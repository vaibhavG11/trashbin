/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045

*/

//rain terrace
function maxWater(arr, n) 
    { 
  
         
        var res = 0
  
       
        for(var i = 1; i < n - 1; i++) 
        { 
  
            
            var left = arr[i]
            for(var j = 0; j < i; j++) 
            { 
                left = Math.max(left, arr[j])
            } 
  
      
            var right = arr[i]
            for(var j = i + 1; j < n; j++) 
            { 
                right = Math.max(right, arr[j]) 
            } 
  
             
            res += Math.min(left, right) - arr[i] 
        } 
        return res
    } 
      
    let arr = [ 0, 1, 0, 2, 1, 0, 
                1, 3, 2, 1, 2, 1 ];
    let n = arr.length; 
   
   console.log(maxWater(arr,n))