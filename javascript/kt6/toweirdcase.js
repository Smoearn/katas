function toWeirdCase(string){
    // return string.split('').map((x, i) => )


    let container = string.split('')
    let output = []
    for (let i = 0; i < container.length; i++) {
        if (i%2==0){
            output.push(container[i].toUpperCase())
            
        }else{
            output.push(container[i].toLowerCase())
        }
        
    
    }
    return output.join('')
  }

  function toWeirdCase(string){
    // return string.split('').map((x, i) => )

    
    
    let container = string.split('')
    let output = []
    counter = 0;
    for (let i = 0; i < container.length; i++) {
        if(container[i] == ' '){
            counter = 0
            output.push(container[i])
        }else{
            if (counter%2==0){
                output.push(container[i].toUpperCase())
                counter +=1
                
            }else{
                output.push(container[i].toLowerCase())
                counter +=1
            }
        }
 
    
    }
    return output.join('')
    
  }



console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
