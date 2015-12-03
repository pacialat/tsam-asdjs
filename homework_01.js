/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
function ex_1_I(myArray) {
    var tot = 0;
    for(i = 0; i < myArray.length; ++i) {
        var x = myArray[i];
        if (x < 0) {
            return tot;
        }
        tot += x; 
    }
    return tot;
}

function ex_1_R(myArray) {
    if (myArray.length == 0 || myArray[0] < 0) {
        return 0;
    } else {
        return myArray[0] + ex_1_R(myArray.slice(1));
    }
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function ex_2_I(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 *i;
    }
    return tot;
}

function ex_2_R(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + ex_2_R(n-1);
    }
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
function ex_3_I(myarray) {
    var tot = 0;
    for(var i = 0; i < myarray.length; i++) {
        tot += myarray[i];
    }
    return tot / myarray.length;
}

function avgAllR(myarray) {
    if (myarray.length == 0) {
        return 0;
    } else {
        return myarray[0] + avgAllR(myarray.slice(1));
    }
}

function ex_3_R(myarray) {
    return avgAllR(myarray) / myarray.length;
}

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, 
restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. 
Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
Esempio:
sumInterval(3, 5) => 12
sumInterval(5, 3) => 12
*/
function sumIntervalW(a, b) {
    var tot = 0;
    for(var i = a; i <= b; i++) {
        tot += i;
    }
    return tot;
}

function ex_4_I(a, b) {
    if (a < b){
        return sumIntervalW(a, b);
    } else {
        return sumIntervalW(b, a);
    }
}

function sumIntervalRW(a, b) {
    if (a == b) {
        return a;
    } else {
        return a + sumIntervalRW(a + 1, b);
    }


}

function ex_4_R(a, b) {
    if (a < b){
        return sumIntervalRW(a, b);
    } else {
        return sumIntervalRW(b, a);
    }
}

/*Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
*/
function ex_5_I(a, b){
    if ((a && b) >= 0){
        var somma = 0;
        for (var i = 0; i < b; i++){
            somma += a;
        }
        return somma;
    }
}

function ex_5_R(a, b){
    if ((a && b) <= 0){
        return 0;
    } else {
        return a + ex_5_R(a, b - 1);
    }
}

/*Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
*/

function ex_6_I(a, b){
    if ((a && b) > 0){
        for (var i = 0; a >= b; i++){
            a -= b;
         }       
        return myArray = [i,a];
    }
}

function divRic(a, b, q){
    
    if(b === 0){
        
        return('error');
    }else{
        if(a >= b){
            r = a - b;
            q++;
            return divRic(a - b, b, q);
        } else {
			v = [q,r];
            return (v);
        }
    }

}
function ex_6_R(a, b){
	q = 0;
	return divRic(a, b, q);
}

/*Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
*/
function ex_7_I(a, b){
    if (a && b >= 0){
        app = 1;
        for (var i = 0; i < b; i++){
            app = ex_5_I(app, a);
        }
    return app;
    }
}

function ex_7_R(a,b){
    if(b === 0){
        return 1;
    } else {
        return (ex_5_R(a, ex_7_R(a, b - 1)));
    }
}

/*Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/
function ex_8_I(myArray){
var n = Math.sqrt(myArray.length);
    var resarray = []
    var row = []
    for(var i = 0; i < myArray.length; ++i) {
        row[row.length] = myArray[i];
        if (row.length == n) {
            resarray.push(row);
            row = [];
        }
    }
    return resarray;
}


function magic(myarray, matrix) {
    matrix.unshift(myarray);
    return matrix;
}


function bidimensionaleRInternal(myarray, n) {
    if (myarray.length == n) {
        return [myarray];
    } else {
        return magic(myarray.slice(0, n), 
                     bidimensionaleRInternal(myarray.slice(n), n));
    }
}

function bidimensionaleR(myarray) {
    return bidimensionaleRInternal(myarray, Math.sqrt(myarray.length));
}



function ex_8_R(vett){
	return bidimensionaleR(vett);
}

/*Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.
*/
function ex_9_I(myArray){
    for (var i = 0; i < Math.floor((myArray.length / 2)); i++) {
        var app = myArray[i];
        myArray[i] = myArray[myArray.length - i - 1];
        myArray[myArray.length - i - 1] = app;
    }
    return myArray;
}


/*Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
*/
function ex_10_I(a, n){
    if ((a && n ) >= 0){
        array = [0];
        for (i = 0; i < n; i++){
            array[i] = a;
        }
        return array;
    }
}

function replicateRicorsiva(vett, num1, num2){
    if(num2 != 0){
        vett.push(num1);
        return replicateRicorsiva(vett, num1, num2 - 1);
    } else {
        
        return vett;
    }
}

function ex_10_R(num1, num2){
	vett = [];
	return replicateRicorsiva(vett, num1, num2);
}

/*Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
*/
function ex_11_I(myArray){
    vettore = [];
    vettPari = [];
    for (i = 0; i < myArray.length; i++){
        if (myArray[i] % 2 != 0){
            vettore.push(myArray[i]);
        } else {
            vettPari.push(myArray[i]);
        }
    }
    vector = vettore.concat(vettPari);
    return vector;
}

function disparipariR(myarray, q, i){	
	if(myarray.length > 0 && q > i){
		if(myarray[i] % 2 == 0){
			myarray.push(myarray[i]);
			myarray.splice(i,1);
			q--;
		}
		return disparipariR(myarray, q, ++i);
	}
	return myarray;
	
}

function ex_11_R(myarray){
	
	return disparipariR(myarray, myarray.length, 0);
	
}