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
class st
{
    constructor()
    {
        this.top=-1
    }
    push(data)
    {
        var nn=new nd(data)
        nn.next=this.top
        this.top=nn
    }
    pop()
    {
        if(this.top==-1)
        {
            console.log("Stack is Empty...")
        }
        else
        {
                var temp=this.top
                console.log(temp.data)
                temp=temp.next
                this.top=temp
            
        }
    }
    rev(str)
    {
        var n=str.length
        var s=new st(n)
        for(var i=0;i<n;i++)
        {
            s.push(str[i])
        }
        for(var i=0;i<n;i++)
        {
            var c=s.pop()
            str[i]=c
        }
    }
    disp()
    {
        if(this.top==-1)
        {
            console.log("Stack is Empty...")
        }
        else
        {
            var temp=this.top
            while(temp!=-1)
            {
                console.log(temp.data)
                temp=temp.next
            }
        }
    }
}
var t=new st()
t.push(10)
t.push(20)
t.push(30)
t.push(40)
console.log("Elements of stack : ")
t.disp()


console.log("POP Elements of stack : ")
t.pop()
t.pop()
console.log("Elements of stack : ")
t.disp()

var string="Yash".split("")

console.log("Reverse Elements of stack : ")
t.rev(string)

