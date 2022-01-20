let add = (...input) => { // The rest parameter ... lets you use arbitrary number of arguments
    let sum=0;
    for (let i of input){
        sum+=i;
    }
    return sum;
}

console.log(add(1,2,3,4));

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr = [...arr1,...arr2,...[7,8,9,10]]; // The spread operator ... does the destructuring of the array here
console.log(arr);

