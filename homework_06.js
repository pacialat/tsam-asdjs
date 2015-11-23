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
