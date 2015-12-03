/*esercizio 1a complessità O(myArray.length)*/
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


/*esercizio 1b complessità O(myArray.length)*/
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


/*esercizio 2 complessità O(n) O(myArray.length)*/
function sumfunctional(myArray){
    var sum = 0;
    myArray.forEach(x => {
        if (x % 2 == 0){
            sum += x * x;
        }
    });
    return sum;
}
//return myArray.filter(x ==> x % 2 == 0).map(a ==> a*a).reduce((acc,x)) ==> acc + x, 0);
function ex_2(myarray){
    return sumfunctional(myarray);
}

/*esercizio 3  O(myArray.length)*/
function Stack() {
    this.myarray = []
}

Stack.prototype.push = function(e) { this.myarray.push(e); }
Stack.prototype.pop = function() { return this.myarray.pop(); }
Stack.prototype.peek = function() { return this.myarray[this.myarray.length - 1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }


Stack.prototype.popall = function() {
    var somma =  0;
    while (!this.isEmpty()){
        somma += this.pop();
    }
    return somma;
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


/*esercizio 4*/
function LinkedList() {
    var Node = function(element, next, prev){ 
        this.element = element;
        this.next = next;
        this.prev = prev;
    };
    this.first = null;
    this.last = null;
    /*var length = 0;
    var head = null;*/
}
    /*this.insert = function(position, element){
        if (position >= 0 && position <= length){ 
            var node = new Node(element),
            current = head,
            previous,
            index = 0;
            if (position === 0){
                node.next = current
                head = node;
            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
         } else {
             return false;
        }
    };
}
*/
LinkedList.prototype.getNode = function(index){
    function nodeR(node, i){
        if (index == i || node == null){
            return node;
        } else {
            return nodeR(node.next, i + 1);
        }
    }
    return nodeR(this.first, 0);
}

LinkedList.prototype.get = function(index){
    var node = this.getNode(index);
    if (node == null){
        return null;
    } else {
        return node.item;
    }
}

LinkedList.prototype.add = function(index, e){
    var node = this.getNode(index);
    if (this.first == null){
        var newNode = new Node(e, null, null);
        first.this = newNode;
        this.last = newNode;
        return;
    }
    if (node == null){
        var newNode = new Node(e, node.last, null);
        if (this.last != null){
        this.last.next = newNode;
        this.last = newNode;
    } else {
        if (index == 0){
            var newNode = new Node(e, null, node);
            node.prev = newNode;
            this.first = newNode;
        }
        if (index != 0){
            var newNode = new Node(e, node.prev, node);
            node.prev.next = newNode;
            node.prev = newNode;
        }
    }
}
}

var lista =new LinkedList();


/*esercizio 5 O(BST.length)*/
function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }


}

BST.prototype.existNode = function(currentNode, e) {
    if (currentNode == null)
        return false;

    if (currentNode.item == e) {
        return currentNode.item;
    } else {
        if (e < currentNode.item)
            return this.existNode(currentNode.left, e)
        else
            return this.existNode(currentNode.right, e)
    }
}

BST.prototype.searchNode = function(e) {
    return this.existNode(this.root, e);
}

var tree = new BST();