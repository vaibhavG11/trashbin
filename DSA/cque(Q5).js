/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045

*/

class Node
 {
        constructor()
         {
          this.data;
        
        }
      }
 
      class Queue 
      {
        constructor()
         {
          this.front=null;
          this.rear=null;
        }
      }
 
      
      function enQueue(q, value) 
      {
        temp = new Node();
        temp.data = value;
        if (q.front == null) q.front = temp;
        else q.rear.link = temp;
 
        q.rear = temp;
        q.rear.link = q.front;
      }
 
      
      function deQueue(q) 
      {
        if (q.front == null) 
        {
          console.log("Queue is empty");
         
        }
 
       
        let value; 
        if (q.front == q.rear) 
        {
          value = q.front.data;
          q.front = null;
          q.rear = null;
        } 
        else 
        {
          temp = q.front;
          value = temp.data;
          q.front = q.front.link;
          q.rear.link = q.front;
        }
 
        return value;
      }
 
     
      function displayQueue(q) {
        temp = q.front;
        console.log("Elements in Circular Queue are: ");
        while (temp.link != q.front) {
          console.log(temp.data);
          temp = temp.link;
        }
        console.log(temp.data);
      }
 
      
 
     
      q = new Queue();
      q.front = q.rear = null;
 
    
      enQueue(q, 14);
      enQueue(q, 22);
      enQueue(q, 6);
 
      
      displayQueue(q);
 
    
      console.log("Deleted value = " + deQueue(q));
      console.log("Deleted value = " + deQueue(q));
 
      
      displayQueue(q);
 
      enQueue(q, 9);
      enQueue(q, 20);
      displayQueue(q);