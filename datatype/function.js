console.log(eval([]));
function f(){
    eval('console.log("hello");');
}
console.log(f());