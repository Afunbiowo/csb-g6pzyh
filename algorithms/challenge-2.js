function divisible(a) {}
let count=0;
let length=a.length;

for (let i=0; i<length; i++){

    if (a[i]>  15 && a[i]/ 2===0){
        count++;
    }

}
return count;
}
module.exports = divisible
