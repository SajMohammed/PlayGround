let x="SajMo";

const reversString = (str) => {
    let strArr = str.split("");
    let revArr = strArr.reverse(); // reverse() method is available with Arrays only
    return revArr.join("");
    //console.log(revArr);
}
console.log(reversString(x));