let x = 10
console.log("outer", x);
function fun() {
    x = 20;
    console.log("inner", x);
}
console.log(fun)