let str = "I love dogs and cats";
let regx = /Dogs|Cats/i; // 'i' here refers to irrespective of the case
console.log(regx.test(str)); //true; just returns the boolean
console.log(str.match(regx)); // gives a detailed output and the syntax is opp. of .test()



