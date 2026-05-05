import React, { useState } from 'react'


 
function Tasks() {
    let a=[10,20,30,40]
    let result=a.indexOf(30)
    console.log(result)
    
    const b="madam"
    const b1=b.split("").reverse("").join("");
    let result1=(b===b1)?"palindrome":"not palindrome";
    console.log(result1)

    let c=[1,1,2,2,3,3,4,4,]
    let c1=[...new Set(c)]
    console.log(c1)

     let sum=0;
    for( let i=0;i<=30;i++){
 sum+=i;
    }
console.log(sum)

 let d=[1,2,3,5]
let d1=d.reduce(function(total,element){
    return(element-total)+1
})
console.log(d1)




   
 
 


  return (
    <div>
        <h1>index value:{result}</h1>
        <h3>madam is a{result1}</h3>
        <h2>the given array is {c1}</h2>
        <h4>sum of series of 1 to 30 is {sum}</h4>
        <h2>missing number is:{d1}</h2>
    </div>
  )
}

export default Tasks