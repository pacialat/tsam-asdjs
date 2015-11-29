Array.prototype.ex_1 = function(){
    var tot = 0;
    this.every(x =>{
        if (x > 0) {
            tot += x;
        }
        return x > 0;
    });
    return tot;
};



Array.prototype.ex_3 = function (){
    var tot = 0;
    this.forEach(x => {
        tot += x;
    });
    return (tot / myArray.length);
}


Array.prototype.ex_11 = function () {
    return this.filter(x => x % 2 != 0).concat(this.filter(x => x % 2 == 0));
}