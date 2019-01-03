function remove(s,n){
   for (let index = 0; index<n; index++) s=s.replace('!', '')
    return s
  }




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
