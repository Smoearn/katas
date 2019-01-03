function countAnimals(sentence) {
    //splitting into array, filtering on the items we can change to integer - reducing the sum of remainding integers 
    return sentence.split(' ').filter(x=> parseInt(x)).reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }



  var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
  console.log(sum); // 6

console.log(countAnimals("I see 3 zebras, 5 lions and 6 giraffes."), 14, 'Live from the Savannah')
console.log(countAnimals("Mom, 3 rhinoceros and 6 snakes come to us!"), 9, 'Close the car !')
console.log(countAnimals("I do not see any animals here!"), 0, 'Live from the kitchen')