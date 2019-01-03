function remove(s,n){
    let counter = 0 ;
  
    if( n > s.length){
        return s.replace(/!/g,'')
    }
    

    while (counter <= n-1){
        counter +=1;
        s = s.replace('!','')
    }

    return s



//function to remove N exlamation marks from left to right.
  
 console.log(remove("Hi!",1) , "Hi")
  console.log(remove("Hi!",100) , "Hi")
  console.log(remove("Hi!!!",1) , "Hi!!")
 console.log(remove("Hi!!!",100) , "Hi")
   console.log(remove("!Hi",1) , "Hi")
 console.log(remove("!Hi!",1) , "Hi!")
 console.log(remove("!Hi!",100) , "Hi")
console.log(remove("!!!Hi !!hi!!! !hi",1) , "!!Hi !!hi!!! !hi")
 console.log(remove("!!!Hi !!hi!!! !hi",3) , "Hi !!hi!!! !hi")
 console.log(remove("!!!Hi !!hi!!! !hi",5) , "Hi hi!!! !hi")
 console.log(remove("!!!Hi !!hi!!! !hi",100) , "Hi hi hi")
  console.log(remove('fcviry!! ergbtd lelgnn!', 5))


