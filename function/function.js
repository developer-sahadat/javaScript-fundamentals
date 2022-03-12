/* function is a must Especially when a simple function has to be declared. When returns from the function. And how to take the parameter in the function. */


const myName=()=>console.log('Md Shahadat');

myName()


const addition=number=>number+20;

console.log(addition(20));

const math=(num1, num2, ...num)=>{
     let numberSum=0;
    for(let number of num){
        numberSum+=number;
    }
    const sum=num1 + num2 +numberSum;
    return sum
}

const result=math(20, 20, 20, 20, 20);
console.log(result);