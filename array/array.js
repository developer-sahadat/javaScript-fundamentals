/* How to declare an array Length, index, push, pop, indexOf, includes how it works. What do you do with it? Do you know those? */

const friends=['Mihadul Islam', 'Hridoy', 'Md Shahadat Hossain', 'Masum Billah'];

console.log(friends);
// push
const myFriends=['Rakib', 'Taher']
friends.push(...myFriends);
console.log(friends);

// pop
friends.pop()
console.log(friends);

// indexOf

const myBestFriend=friends.indexOf('Masum');
console.log(myBestFriend);
const bestFriend=friends.indexOf('Masum Billah');
console.log(bestFriend);

// includes

console.log(friends.includes('Md Shahadat Hossain'));
console.log(friends.includes('Md Shahadat'));

