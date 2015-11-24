<<<<<<< HEAD
function CircularQueue(n){
	this.myarray = [];
	this.coda = 0;
	this.testa = 0;
	this.cap = n;
	this.dim = 0;
	
		
	
}

CircularQueue.prototype.enqueue = function(e){
	if(this.size() == this.cap){
		return false;
	} else {
		this.myarray[this.coda] = e;
		this.coda = (this.coda + 1) % this.cap;
		this.dim++;
		
	}
}
CircularQueue.prototype.dequeue = function(){
	if(this.isEmpty()){
		return null;
	} else {
		var temp = this.myarray[this.testa];
		this.myarray[this.testa] = null;
		this.testa = (this.testa + 1) % this.cap;
		this.dim--;
		return temp;
	}
}
CircularQueue.prototype.front = function(){
	return this.myarray[this.testa];
}
CircularQueue.prototype.isEmpty = function(){
	return this.size() === 0;

}

CircularQueue.prototype.size = function(){
	return this.dim;
}
=======
function Queue() {
    this.myarray = [];
}

Queue.prototype.enqueue = function(e) {
    this.myarray.unshift(e);
} 

Queue.prototype.dequeue = function() {
    return this.myarray.pop();
} 

Queue.prototype.front = function() {
    return this.myarray[this.myarray.length - 1];
} 

Queue.prototype.isEmpty = function() {
    return this.size() == 0;
} 

Queue.prototype.size = function() {
    return this.myarray.length;
} 
>>>>>>> 45a6226b755f8c3f0b43463b5c48d5d72536dfe5
