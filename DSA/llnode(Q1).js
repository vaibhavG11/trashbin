/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045

*/

class llnode
{
    constructor(data)
    {
        this.data=data
        this.next=null
    }
}
class llist
{
    constructor()
    {
        this.head=null
    }
    create(data)
    {
    
        var newn=new llnode(data)
        if(this.head==null)
        {
            this.head=newn
        }
        else
        {
            var temp=this.head
          while(temp.next!=null)
          {
            temp=temp.next
          }
          temp.next=newn  
        }
    }
    insertf(data)
    {
        var nn=new llnode(data)
        nn.next=this.head
        this.head=nn
    }
    insertl(data)
    {
        var nnl=new llnode(data)
        var temp=this.head
        while(temp.next!=null)
        {
            temp=temp.next
        }
        temp.next=nnl
    }
    insertp(data,pos)
    {
        var nnp=new llnode(data)
        var temp=this.head
        for(var i=1;i<pos-1 && temp.next!=null;i++)
        temp=temp.next

        nnp.next=temp.next
        temp.next=nnp
      
    }
    disp()
    {
        let temp=this.head
        while(temp!=null)
        {
            console.log(temp.data)
            temp=temp.next
        }

    }
    rev()
    {
        var p=null,q=null,r=this.head
        while(r!=null)
        {
            p=q
            q=r
            r=r.next
            q.next=p
            this.head=q
        }
    }
    delf()
    {
        console.log("Delete 1st node  "+this.head.data)
        this.head=this.head.next
    }
    detl()
    {
        var temp=this.head
        while(temp.next!=null)
        {
            var q=temp
            temp=temp.next
        }
        q.next=null
        console.log("Delete last node  "+temp.data)
    }
    delm(pos)
    {
        var temp=this.head
       for(var i=0;i<pos-1;i++)
       {
        temp=temp.next
       }
       var p=temp.next
        temp.next=temp.next.next
        console.log("Delete Node At Any Position :"+p.data)
        p.next=null

    }
    disp()
    {
        let temp=this.head
        while(temp!=null)
        {
            console.log(temp.data)
            temp=temp.next
        }
    }
}
var t=new llist()
t.create(10)
t.create(45)
t.create(66)
console.log("The element of linkedd list:")
t.disp()
console.log("The Insert element 1st position of linked list:")
t.insertf(5)
t.disp()
console.log("The Insert element last position of linked list:")
t.insertl(70)
t.disp()
console.log("The Insert element Any position of linked list:")
t.insertp(50,4)
t.disp()
console.log("Reverse linked list:")
t.rev()
t.disp()

console.log("Delete 1st Node of linked list:")
t.delf()
t.disp()

console.log("Delete last Node of linked list:")
t.detl()
t.disp()

console.log("Delete At Position Node linked list:")
t.delm(2)
t.disp()