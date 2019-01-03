// function findEvenIndex(arr){
//     arrlength = arr.length
//     container = []
//     for (let i = 0; i < arrlength; i++) {
//         container.push(arr[0])
//         arr.splice(0,1)
//         // left = arr.reduce((a,b)=> a+b,0)
//         // right = container.reduce((a,b) => a+b,0) - container[container.length -1]
//         // console.log(left, arr, right, container);
        
//         if(arr.reduce((a,b)=> a+b,0) == (container.reduce((a,b) => a+b,0) - container[container.length -1] )){
//             return i
            
//         }

    


        
//     }
//     //     console.log(container.reduce((a,b)=> a+b, 0))
//     //     console.log(original.reduce((a,b)=> a+b, 0))
//     //     console.log(container, original);
//     }
    //     //  if(container.reduce((a,b)=> a+b, 0) == original.reduce((a,b)=> a+b, 0) ){
             
    //     //  }

    // console.log(container, arr);


// function findEvenIndex(arr){
//     arrlength = arr.length
//     container = []
//     for (let i = 0; i < arrlength; i++) {
//         container.push(arr[0])
//         arr.splice(0,1)
    
//         if(arr.reduce((a,b)=> a+b,0) == (container.reduce((a,b) => a+b,0) - container[container.length -1] )){
//             return i
//         }
//     }
// }




// Function that finds the even index of an array. If threre is no even index return -1

function findEvenIndex(arr){
    arrlength = arr.length
    container = []
    for (let i = 0; i < arrlength; i++) {
        container.push(arr[0])
        arr.splice(0,1)
     
        if(arr.reduce((a,b)=> a+b,0) == (container.reduce((a,b) => a+b,0) - container[container.length -1] )){
            return i  
        }

    }
    return -1
}


//console.log(findEvenIndex([1,2,3,4,3,2,1]),3, "The original was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]),1, "The original was: [1,100,50,-51,1,1] \n");
// console.log(findEvenIndex([1,2,3,4,5,6]),-1, "The original was: [1,2,3,4,5,6] \n");
// console.log(findEvenIndex([20,10,30,10,10,15,35]),3, "The original was: [20,10,30,10,10,15,35] \n");
