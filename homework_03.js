<<<<<<< HEAD
/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

Array.prototype.sumAllWhilePos = function(){
    var tot = 0;
    this.every( x =>{
=======
Array.prototype.ex_1 = function(){
    var tot = 0;
    this.every( x =>
>>>>>>> 85a154bf00cea6f5314f701314583b6dcbc9f6d8
        if (x > 0) {
            tot += x;
        }
        return x > 0;
<<<<<<< HEAD
    });
    return tot;
}

Array.prototype.ex_1 = Array.prototype.sumAllWhilePos;

/*
Esercizio 3
Dato un array, calcolarne la media
*/

Array.prototype.average = function (){
=======
    );
    return tot;
};

Array.prototype.ex_3 = function (){
>>>>>>> 85a154bf00cea6f5314f701314583b6dcbc9f6d8
    var tot = 0;
    this.forEach(x => {
        tot += x;
    });
<<<<<<< HEAD
    return (tot / this.length);
}

Array.prototype.ex_3 = Array.prototype.average;


/*Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
*/

Array.prototype.ex_11 = function () {
    return this.filter(x => x % 2 != 0).concat(this.filter(x => x % 2 == 0));
}


/**/
function Queue(){
    this.myArray= [];
}
Queue.prototype.enqueue = function (e){
    this.myArray.unshift(e);
}
Queue.prototype.dequeue = function (e){
    return this.myArray.pop();
}

=======
    return (tot / myArray.length);
}

Array.prototype.ex_11 = function () {
    return this.filter(x => x % 2 != 0).concat(this.filter(x => x % 2 == 0));
}
>>>>>>> 85a154bf00cea6f5314f701314583b6dcbc9f6d8
