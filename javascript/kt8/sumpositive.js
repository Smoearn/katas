function positiveSum(arr) {

    return arr.filter(v => v > 0).reduce(function(a,b){
        return a+b;
    },0);

}

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);