function merge(ar1, ar2) {
    var result = [];
    var i1 = 0;
    var i2 = 0;

    while(i1 < ar1.length && i2 < ar2.length) {
        if(ar1[i1] < ar2[i2]) {
            result.push(ar1[i1]);
            i1++;
        } else {
            result.push(ar2[i2]);
            i2++;
        }
    }
    return result.concat(ar1.slice(i1)).concat(ar2.slice(i2))
}

function mergesort(myarray){
    if (myarray.length == 0){
        return myarray;
    }
    var mid = Math.ceil(myarray.length / 2);
    return merge(mergesort(myarray.slice(0, mid)), mergesort(myarray.slice(mid)));
}




function merge1(ar1, ar2) {
    var result = [];
    var i1 = 0;
    var i2 = 0;

    while(i1 < ar1.length && i2 < ar2.length) {
        if(ar1[i1] < ar2[i2]) {
            result.push(ar1[i1]);
            i1++;
        } else {
            result.push(ar2[i2]);
            i2++;
        }
    }
    return result.concat(ar1.slice(i1)).concat(ar2.slice(i2));
}