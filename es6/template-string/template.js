
const students={
    name:'Md Shahadat Hossain',
    id:50,
    address:'Savar Dhaka- Bangladesh',
    friend:{
        name:'Md Masub Millah',
        subject:'Science',
        id:51,

        friend2:{
            name:'Md Rakib',
            id:55
        }
    },
    favorite:['Programming', 'English', 'Bangla'],
    hobbies:function(){
        const myHobies=this.favorite[0];
        return myHobies
    }
}

const result=`Name: ${students.name} friends: ${students.friend.name } , ${students.friend.friend2.name}`
console.log(result);