function Stack() {
    this.myarray = []
}

Stack.prototype.push = function(e) { this.myarray.push(e); }
Stack.prototype.pop = function() { return this.myarray.pop(); }
Stack.prototype.peek = function() { return this.myarray[this.myarray.length - 1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

function rpn(string){

    string = string.split(' ');
    var stack = new Stack();
    string.map(x => {
        if (isNaN(x) == false){
            parseInt(stack.push(x));
        } else{
            if (x == "+"){
                stack.push(parseInt(stack.pop()) + parseInt(stack.pop()));
            }else if (x == "*"){
                stack.push(stack.pop() * stack.pop());
            }else if (x =="-"){
                var b = stack.pop();
                var a = stack.pop();
                stack.push(a - b);
            }else if (x == "/"){
                var b = stack.pop();
                var a = stack.pop();
                stack.push(a / b);
            }
        }
    });
    return stack.pop();
}