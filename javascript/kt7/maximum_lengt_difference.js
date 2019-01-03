function mxdiflg(a1, a2) {
    if(!a1 || !a2 ||a2.length == 0 || a1.length == 0){
        return -1
    }

    let smallestAr1 = false;
    let biggestAr1 = 0;
    let smallestAr2 = false;
    let biggestAr2 = 0;

    //finding smallest and biggest lengt in a1
    for (let i = 0; i < a1.length; i++) {
        const element = a1[i];
        if (element.length < smallestAr1 || smallestAr1 == false){
            smallestAr1 = element.length;
        }
        if(element.length > biggestAr1){
            biggestAr1 = element.length;
        }
        
    }
    //finding smallest and biggest length in a2
    for (let i = 0; i < a2.length; i++) {
        const element = a2[i];
        if (element.length > biggestAr2){
            biggestAr2 = element.length;
        }
        if(element.length < smallestAr2 || smallestAr2 == false){
            smallestAr2 = element.length;
        }
    }
    
    const difference = Math.abs(smallestAr1 - biggestAr2)
    const difference2 = Math.abs(smallestAr2 - biggestAr1)

    
    if (difference > difference2){
        return difference
    }
    return difference2
    
}




function mxdiflg(a1, a2) {
    if(!a1 || !a2 ||a2.length == 0 || a1.length == 0){
        return -1
    }
    ar1 = a1.sort((a, b) => a.length - b.length);
    ar2 = a2.sort((a,b) => a.length - b.length);

    const difference = Math.abs(ar1[0].length - ar2[ar2.length - 1].length)
    const difference2 = Math.abs(ar2[0].length - ar1[ar1.length- 1].length)
    
    return difference > difference2 ? difference:difference2


}
var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);