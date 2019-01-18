

/**
 * To create a new node which contains datas and holds the next data in it.
 */
class Node {
    constructor(data) {
        this.data = data;
        /**
         * next holds next data, here as the node created is new it points to null.
         */
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.first = null;
        this.size = 0;
    }
    add(data) {
        var node = new Node(data);
        if (this.first == null) {
            this.first = node;
            this.size++;
        
        }
        else {
            var temp = this.first;
            while (temp.next) {
                temp = temp.next;
            }
            this.size++;
            temp.next = node;
        }
    }
    search(item){
        if(this.first==null){
            return false;
        }
        var temp=this.first;
        while(temp){
            if(temp.data==item)
                return true;
            temp=temp.next;
        }
        return false;
}
addToPos(data){
    var temp=this.first;
    var prev=temp;
    
    if(data<temp.data)
    {
        this.insertFirst(data);
        return
    }
    var node = new Node(data);
    while(temp.next){
        if(temp.data<data)
        {
            prev=temp;
        temp=temp.next;
        }
        else{
        prev.next=node
        node.next=temp
       
        break;  
        }
    }
    if(!temp.next)
    {
        temp.next=node;
    }
   this.size++;
}
remove(data){

    var temp=this.first;
    if(temp.data==data){
        this.deleteFirst();
        return;
    }
    var prev=temp;
    while(temp){
        if(temp.data==data){
            prev.next=temp.next;
            this.size--;
            return temp.data;

        }
        
        prev=temp;
        temp=temp.next;
    }
return null;
}
display(){
    var temp=this.first;
    var str="";
    while(temp){
        str=str+" "+temp.data;
        temp=temp.next;
    }
    return str;
}
    insertFirst(data) {
        var node = new Node(data);
        if (this.first == null) {
            this.first = node;
            this.size++;
            return;
        }
        else {
            node.next = this.first;
            this.first = node;
            this.size++;
            return;
        }
    }
    insert(index, data) {
        if (index == 1) {
            this.insertFirst(data);
            return;
        }
        if (this.first == null) {
            return;
        }
        var node = new Node(data);
        var count = 0, prev = this.first, temp = this.first;
        try {
            while (temp) {
                if (count == index - 1) {
                    prev.next = node;
                    node.next = temp;
                    this.size++;
                    return;
                }
                count++;
                prev = temp;
                temp = temp.next;
            }
            return false;
        }
        catch (exception) {
            console.log(exception + "Enter correct index");
        }

    }
    deleteFirst() {
        if (this.first == null) {
            console.log("Linked List empty");
            return;
        }
        var n = this.first.data;
        this.first = this.first.next;
        this.size--;
        return n;
    }
}
    class Stack{
        constructor()
        {
           this.top=null;
           this.size=0; 
        }

        push(data)
        {
            var node=new Node(data);
            node.next=this.top;
            this.top=node;
            this.size++

        }
        pop()
        {
           var  data =this.top.data;
            this.top=this.top.next;
            this.size--;
           // console.log("popped value "+data);
            return data;
        }
        peek()
        {
            return this.top.data
        }
        print()
        {
            var t=this.top;
            while(t!=null)
            {
                console.log(t.data);
                t=t.next;
            }

        }
        isEmpty()
        {
            if(this.size===0)
            {
                return true;
            }
            else
            return false
        }
        getSize()
        {
            return this.size;
        }
    }



module.exports = {
    LinkedList,
    Stack
}