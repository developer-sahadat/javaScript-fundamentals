/*2.1 How to write condition, six types of condition (>, <, ===,! ==,> =. <=) Which will be used for any thing. Also && or ... How to fulfill both of these in more than one condition and how to fulfill both of them
2.2. How to write if-else with one or more conditions and when to write if-else-if-else. Think of such an example and write it down */

const gradNumber=90;


if(101<=gradNumber && 0>=gradNumber){
    console.log('Not Valid');
}

else if(100>=gradNumber && 80<=gradNumber){
    console.log('A+');
}
else if(79>=gradNumber && 70<=gradNumber){
console.log('A');
}
else if(69>=gradNumber && 60<=gradNumber){
    console.log('A');
}else{
    console.log('F');
}
