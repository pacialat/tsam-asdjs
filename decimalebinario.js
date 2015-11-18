function Stack(){

}
Stack.prototype.push = function(){ return };
stack.prototype.pop = function(){};

function divideBy2(decNumber){
    var remStack = new Stack(), rem, binaryString = '';
    while (decNumber > 0){  
        rem = Math.floor(decNumber % 2); 
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2); 
    }
    while (! remStack.isEmpty()){ 
    binaryString += remStack.pop().toString();
    }
    return binaryString;
}