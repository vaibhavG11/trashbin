/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045

*/

class Node  
      { 

        constructor() { 
          this.data = 0; 
          this.priority = 0; 
          this.next = null; 
        } 
      } 
  
      var node = new Node(); 
   
      function newNode(d, p) 
      { 
        var temp = new Node(); 
        temp.data = d; 
        temp.priority = p; 
        temp.next = null; 
  
        return temp; 
      } 

      function peek(head) { 
        return head.data; 
      } 
  
      function pop(head)
       { 
        var temp = head; 
        head = head.next; 
        return head; 
      } 
  
      function push(head, d, p) { 
        var start = head; 
  
        var temp = newNode(d, p); 
  
        if (head.priority > p)  
        { 
          
          temp.next = head; 
          head = temp; 
        }  
        else
        { 
       
          while (start.next != null && start.next.priority < p) { 
            start = start.next; 
          } 
  
          
          temp.next = start.next; 
          start.next = temp; 
        } 
        return head; 
      } 
  
   
      function isEmpty(head) { 
        return head == null 
      } 
  
     
      var pq = newNode(4, 1); 
      pq = push(pq, 5, 2); 
      pq = push(pq, 6, 3); 
      pq = push(pq, 7, 0); 
  
      while (isEmpty(pq) == 0) { 
        console.log(peek(pq) + " "); 
        pq = pop(pq); 
      } 