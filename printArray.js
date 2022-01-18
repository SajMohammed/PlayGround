let arr =[1,2,3,4];

Array.prototype.print = (arr) =>{
    let str = arr.toString();
    return str;
}
console.log(arr.print(arr));
