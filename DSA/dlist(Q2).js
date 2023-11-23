
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
        this.prev=null
    }
}
class dlist
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
            newn.prev=temp
            temp=newn
        }
    }

    insertf(data)
    {
        var nn=new llnode(data)
        nn.next=this.head
        this.head.prev=nn
        this.head=nn
    }
    insertp(data,pos)
    {
        var nnp=new llnode(data)
        var temp=this.head
        for(var i=1;i<pos-1 && temp.next!=null;i++)
        temp=temp.next

        nnp.next=temp.next
        nnp.prev=temp
        temp.next=nnp
        
      
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
        temp.prev=null
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
        p.next=null
        p.prev=null
        console.log("Delete Node At Any Position :"+p.data)
        

    }
    disp()
    {
        var temp=this.head
        console.log("Elements of Linked list are :")
        while(temp!=null)
        {
            console.log(temp.data)
            temp=temp.next
        }   
    }
}
var t=new dlist()
t.create(10)
t.create(20)
t.create(30)
t.disp()

console.log("Insert 1st Elements of Linked list are :")
t.insertf(5)
t.disp()

console.log("Insert At Any Position of Linked list are :")
t.insertp(15,3)
t.disp()

console.log("Delete 1st Node of Linked list are :")
t.delf()
t.disp()

console.log("Delete last Node of Linked list are :")
t.detl()
t.disp()

console.log("Delete At any Position of Linked list are :")
t.delm(2)
t.disp()