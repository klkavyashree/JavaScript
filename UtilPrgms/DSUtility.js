

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
    search(item) {
        if (this.first == null) {
            return false;
        }
        var temp = this.first;
        while (temp) {
            if (temp.data == item)
                return true;
            temp = temp.next;
        }
        return false;
    }
    addToPos(data) {
        var temp = this.first;
        var prev = temp;

        if (data < temp.data) {
            this.insertFirst(data);
            return
        }
        var node = new Node(data);
        while (temp.next) {
            if (temp.data < data) {
                prev = temp;
                temp = temp.next;
            }
            else {
                prev.next = node
                node.next = temp

                break;
            }
        }
        if (!temp.next) {
            temp.next = node;
        }
        this.size++;
    }
    remove(data) {

        var temp = this.first;
        if (temp.data == data) {
            this.deleteFirst();
            return;
        }
        var prev = temp;
        while (temp) {
            if (temp.data == data) {
                prev.next = temp.next;
                this.size--;
                return temp.data;

            }

            prev = temp;
            temp = temp.next;
        }
        return null;
    }
    display() {
        var temp = this.first;
        var str = "";
        while (temp) {
            str = str + " " + temp.data;
            temp = temp.next;
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


//stack implementation
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        if (this.isEmpty()) {
            var node = new Node(data);
            this.top = node;
            this.size++;
            return;
        }
        else {
            var node = new Node(data);
            node.next = this.top;
            this.top = node
            this.size++
        }
    }
    pop() {
        if (this.isEmpty()) {
            return 'no elements'
        }

        var dat = this.top.data;
        this.top = this.top.next;
        this.size--;
        //console.log("popped value "+data);
        return dat;

    }
    peek() {
        return this.top.data
    }
    print() {
        var t = this.top;
        while (t != null) {
            console.log(t.data);
            t = t.next;
        }
    }
    isEmpty() {
        if (this.size === 0) {
            return true;
        }
        else
            return false
    }
    getSize() {
        return this.size;
    }
}


////////////////////////////////queue///////////

class Queue {
    constructor() {
        this.top = null;
        this.size = 0;
        this.front = null;
    }

    push(data) {

        if (this.isEmpty()) {

            var node = new Node(data)
            this.top = node;
            this.front = node;
            this.size++;
            //console.log('in push ' + this.top.data)
            return;
        }
        var node = new Node(data);
        this.top.next = node;
        this.top = node;
        this.size++;
       // console.log('in push ' + this.top.data)

    }
    pop() {
        if (this.isEmpty()) {
            console.log('no elemets found')
            return;
        }

        var dat = this.front.data
        this.front = this.front.next;
        this.size--;
        return dat;
    }
    peek() {
        return this.top.data
    }
    print() {
        var t = this.front;
        while (t != null) {
            console.log(t.data);
            t = t.next;
        }
    }

    isEmpty() {
        if (this.size === 0) {
            return true;
        }
        else
            return false
    }
    getSize() {
        return this.size;
    }
}

//////////////////////////////////Deque////////////
class Deque {
    constructor() {
        this.front = -1;
        this.rear = 0;
        this.size = 30;
        this.arr = new Array(30);
    }

    isFull() {
        if ((this.front == 0 && this.rear == this.size - 1) || (this.rear + 1 == this.front)) {
            return true;
        }
        return false;
    }
    isEmpty() {
        return this.front == -1;
    }

    addFront(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == 0) {
            this.front = this.arr.length - 1;
        }
        else {
            this.front--;
        }
        this.arr[this.front] = item;
    }
    addRear(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == this.arr.length - 1) {
            this.rear = 0;
        }
        else {
            this.rear++;
        }
        this.arr[this.rear] = item;
    }
    removeRear() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;
        }
        var item;
        if (this.rear == this.front) {
            item = this.arr[this.rear];
            this.rear = -1;
            this.front = -1;
        }
        else if (this.rear == 0) {
            item = this.arr[this.rear];
            this.rear = this.arr.length - 1;
        }
        else {
            item = this.arr[this.rear]
            this.rear = this.rear--;
        }
        return item;
    }
    removeFront() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;
        }
        var item;
        if (this.front == this.rear) {
            item = this.arr[this.front];
            this.front = -1;
            this.rear = -1;
        }
        else if (this.front == this.arr.length - 1) {
            item = this.arr[this.front];
            this.front--;
        }
        else {
            item = this.arr[this.front];
            this.front++;
        }
        return item;
    }
    getFront() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front];
    }
    getRear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.rear];
    }

    PalindromeChecker(str) {
        for (let i = 0; i < str.length; i++) {
            this.addRear(str.charAt(i));
        }
      //  console.log(this.front);
        //console.log(this.rear);
        while (this.front != this.rear && this.front < this.rear) {

            if (this.getFront() != this.getRear()) {
                return false;
            }
            this.front++;
            this.rear--;
        }
        return true;
    }
}



module.exports = {
    LinkedList,
    Stack,
    Queue,
    Deque,
     /*
        *@purpose : to find day falls on the given user input date format
        *@param   : day-take date from command line of user choice 
        *           month-take month from command line of user choice
        *           year- take year from command line of user choice
        *@description : use formula and calculate the day 
        */
       dayOfWeek(day, month, year) 
    {
        var y0 = year - Math.floor((14 - month) / 12);
       
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
       
        var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
    
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;


    },
    /**
	 * @description	Finds the  prime in the range.
	 * 
	 * @param {number} initial 
	 * @param {number} final 
	 * 
	 * @returns Array of primes in the range.
	 */
	findPrime(initial, final) {
		var flag = 0, k = 0;
		var prime = [];

		for (var index1 = initial; index1 <= final; index1++) {
			for (var index2 = 2; index2 < index1; index2++) {
				if (index1 % index2 == 0) {
					flag = 0;
					break;
				}
				else {
					flag = 1;
				}
			}
			if (flag == 1) {
				prime[k++] = index1;
			}
		}
		return prime;
},
/**
	 * @description	To find the anagram of all the primes in the range.
	 * 
	 * @param {number} initial 
	 * @param {number} final
	 * 
	 * @returns	Array which are prime and anagram in the range. 
	 */
	findAnaPrime(initial, final) {
		var primes = this.findPrime(initial, final);
		var n = primes.length;

		var anaPrimes = [];
		var h = 0;

		for (let index1 = 0; index1 < n - 1; index1++) {
			for (let index2 = index1 + 1; index2 < n - 1; index2++) {
				if (algoutil.anagram(primes[index1], primes[index2])) {
					anaPrimes[h++] = primes[index1];
					anaPrimes[h++] = primes[index2];
				}
			}
		}
		return anaPrimes;
},
findFactorial(num)
{
    var fact=1
    for(let i=1;i<=num;i++)
    {
        fact=fact*i
    }
  
    return fact;

}
    
}