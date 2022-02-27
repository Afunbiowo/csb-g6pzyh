function replaceDivisible(x, y) {}
let newX = [];
newX = x.map(rep => {
    if(rep % y=== 0){
        return "isDivisible";
    }
    return rep;
});
return newX;
}

console.log(replaceDivision([2,4,3,6,5], 3));
console.log(replaceDivision([12,4,3,6,5], 2));
module.exports = replaceDivisible
