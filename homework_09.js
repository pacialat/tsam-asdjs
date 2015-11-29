/*esercizio 1a complessità O(n)*/
function recursivesum1(myArray){
    if (myArray.length == 0 || myArray[0] < 0) {
        return 10;
    } else {
         return (5 * myArray[0]) + recursivesum1(myArray.slice(1));
    }
}

function ex_1a(myArray){
    return recursivesum1(myArray);
}


/*esercizio 1b complessità O(n)*/
function recursivesum2(myArray){
    if (myArray.length == 0) {
        return 0;
    } else {
        if (myArray[0] % 2 == 0){
            return ((myArray[0] * myArray[0]) + recursivesum2(myArray.slice(1)));
        } else {
            return  recursivesum2(myArray.slice(1));
        }
    }
}

function ex_1b(myArray){
    return recursivesum2(myArray);
}


/*esercizio 2 complessità O(n)*/
function sumfunctional(myArray){
    var sum = 0;
    myArray.forEach(x => {
        if (x % 2 == 0){
            sum += x * x;
        }
    });
    return sum;
}

function ex_2(myarray){
    return sumfunctional(myarray);
}

/*esercizio 3 */
function Stack() {
    this.myarray = []
}

Stack.prototype.push = function(e) { this.myarray.push(e); }
Stack.prototype.pop = function() { return this.myarray.pop(); }
Stack.prototype.peek = function() { return this.myarray[this.myarray.length - 1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }


Stack.prototype.popall = function() {
    while (!this.isEmpty()){
        return this.pop();
    }
}


function multiplyqueues(myarray){
    var stackEven = new Stack();
    var stackOdd = new Stack();
    myarray.forEach(x => {
        if (x % 2 == 0){
            stackEven.push(x);
        } else {
            stackOdd.push(x); 
        }
    });
    var stackResult = new Stack();
    /*console.log('prova');*/
    while (!(stackEven.isEmpty()) && !(stackOdd.isEmpty())){
        /*console.log('sono dentro');*/
        stackResult.push(stackEven.pop() * stackOdd.pop());
    }
    return stackResult.popall();
} 

function ex_3(myarray){
    return multiplyqueues(myarray);
}


/*esercizio 4
function LinkedList() {
    var Node = function(element){ 
        this.element = element;
        this.next = null;
    };
    var length = 0;
    var head = null; 

    this.insert = function(position, element){
        if (position >= 0 && position <= length){ 
            var node = new Node(element),
            current = head,
            previous,
            index = 0;
            if (position === 0){ //add on first position
                node.next = current; //{2}
                head = node;
            } else {
                while (index++ < position){ //{3}
                    previous = current;
                    current = current.next;
                }
                node.next = current; //{4}
                previous.next = node; //{5}
            }
            length++; //update size of list
            return true;
         } else {
             return false; //{6}
        }
    };
}

var lista = new LinkedList();
*/