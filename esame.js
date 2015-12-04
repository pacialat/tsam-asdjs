function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */



/*Esercizio Ricorsione */
function trovaValore(a){
    if (a.length == 0){
        return 0;
    } else {
        if (a[0] == 5070){
            return 1 + trovaValore(a.slice(1));
        }
        return trovaValore(a.slice(1));
    }
}

/*Esercizio filter/map/reduce*/
function metodi(a){
    return Math.sqrt(
        a.filter(x => (x >= 0 && x % 2 == 0))
        .map(x => x * x)
        .reduce( (prec, succ) => prec + succ)
    );
}

/*Esercizio Stack*/
function Stack() {
    this.myarray = []
}

Stack.prototype.push = function(e) { this.myarray.push(e); }
Stack.prototype.pop = function() { return this.myarray.pop(); }
Stack.prototype.peek = function() { return this.myarray[this.myarray.length - 1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

function calculator(string){

    string = string.split(" ");
    var V = new Stack();
    var S = new Stack();
    string.map(x => {
        if (isNaN(x) == false){
            parseInt(V.push(x));
        }
        switch (x){
            case "+":
                S.push(x);
                break;
            case "*":
                S.push(x);
                break;
            case "-":
                S.push(x);
                break;
            case "/":
                S.push(x);
                break;
            case "(":
                S.push(x);
                break;
            case ")":
                var num2 = V.pop();
                var num1 = V.pop();
                var operatore = S.pop();
                switch (operatore){
                    case "+":
                        V.push(parseInt(num1) + parseInt(num2));
                        break;
                    case "*":
                        V.push(num1 * num2);
                        break;
                    case "-":
                        V.push(num1 - num2);
                        break;
                    case "/":
                        V.push(num1 / num2);
                        break;
                }
                S.pop();
            break;
        }
    });
    return V.pop();
}




/*Tree*/
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




function caricaAlbero(tree, array) {
	for (var i = 0; i < array.length; i++) {
			tree.add(array[i]);
	}
	return;
}


BST.prototype.max = function() {
	return this.massimo(this.root);
}

BST.prototype.massimo = function(currentNode) {
	if (currentNode.right == null){
		return currentNode.item;
	} else {
		return this.massimo(currentNode.right);
	}
}



var albero = new BST();

