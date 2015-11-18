/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
function ex_1_F(myArray){
    var tot = 0;
    myArray.every( x => {
        if (x > 0){
            tot += x;
        }
        return x > 0;
    });
    return tot;
}

function everyBuildArray(myArray, check){
    var tmparray = [];
    myArray.every(x =>{
        tmparray.push(x);
        if (check(x)){
        return true;
    } else {
        return false;
    }
    });
    return tmparray;
}
function somma(myArray){
    return everyBuildArray(myArray, x => x > 0).reduce((acc,x) => acc + x, 0);
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function range(n){
    a = [];
    for (var i = 0; i < n; i++){
        a[i] = i;;
    }
    return a;
}
function sumOddRT(n){
    return range(n).map(x => 2 * x + 1).reduce((acc, x) => acc + x);
}
/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/
function bidimensionale(myArray){
    var n = Math.sqrt(myArray.length);
    var resarray = [];
    var row = [];
    for (var i = 0; i < myArray.length; i++){
        row[row.length] = myArray[i];
        if (row.length == n){
            resarray.push(row);
            row = [];
        }
    }
    return resarray;
}

function magic(myArray, matrix){
   matrix.unshiftt(myArray);
   return matrix;
}
function bidimensionaleRR(myArray){
    function magic(myArray, matrix){
        return matrix.unshift(myArray);
    }

function bidimensionaleR(myArray, n){

    if (myArray.length == n){
        var a = [myArray];
        }else{
            return magic(myArray.slice(0, n), bidimensionaleR(myArray.slice(n)), n);
        }   
}
return bidimensionaleR(myArray.Math.sqrt(myArray.length));
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
function  ex_3_F(myArray){
    var tot = 0;
    myArray.forEach(x => {
        tot += x;
    });
    return (tot / myArray.length);
}

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
Crea una funzione che crea un array da A a B, poi  utilizzando reduce esegui la somma
/*


Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
*/
function mult(a, n){
    if ((a && n ) >= 0){
        array = [0];
        for (i = 0; i < n; i++){
            array[i] = a;
        }
        return array;
    }
}

/*Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
*/

function ex_5_F(a, b){
    var prod = 0;
    mult(a,b).forEach(x => {
        prod += x;
    });
    return prod;
}

/*Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
*/

function ex_7_F(a, b){
    var pow = 1;
    mult(a, b).forEach(x => {
        pow = ex_5_F(pow, a);
    });
    return pow;
}

/*Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
*/

function ex_11_F(myArray){
    return myArray.filter(x => x % 2 != 0).concat(myArray.filter(x => x % 2 == 0));
}

