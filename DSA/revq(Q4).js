/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045

*/

class nd
{
    constructor(data)
    {
        this.data=data
        this.next=null
    }
}
class qeu
{
    constructor()
    {
        this.f=null
        this.r=null
    }
    insertq(data)
    {
        var nn=new nd(data)
        if(this.f==null)
        {
            this.f=this.r=nn
        }
        else
        {
            this.r.next=nn
            this.r=nn
        }
    }
    del()
    {
        if(this.f==null)
        {
            console.log("Queue is Empty....")   
        }
        else
        {
            var t=this.f
            this.f=this.f.next
            console.log("Deleted NOde in Queue  :"+t.data)
           
        }
    }
    disp()
    {
        if(this.f==null)
        {
            console.log("Queue is Empty....")
        }
        else
        {
            var temp=this.f
            while(temp!=null)
            {
                console.log(temp.data)
                temp=temp.next
            }
        }
    }
}
var q=new qeu()
q.insertq(10)
q.insertq(20)
q.insertq(30)
q.insertq(40)
q.insertq(50)

q.disp()

q.del()

q.disp()
q.del()

q.disp()