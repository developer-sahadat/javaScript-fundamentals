/* The last gem is the Object, so how does one declare an object. How to access the property there. Also how to use array, object as value of object property. */

const students={
    name:'Md Shahadat Hossain',
    id:50,
    address:'Savar Dhaka- Bangladesh',
    friend:{
        name:'Md Masub Millah',
        subject:'Science',
        id:51
    },
    favorite:['Programming', 'English', 'Bangla'],
    hobbies:function(){
        const myHobies=this.favorite[0];
        return myHobies
    }
}

const result=`Name: ${students.name}, Address: ${students.address}, friends: ${students.friend.name}, favorite: ${students.favorite}, hobies: ${students.hobbies()}`

console.log(result);