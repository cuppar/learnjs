console.log('typeof null :', typeof null);
console.log('typeof undefined :', typeof undefined);
function f() { }
console.log('typeof f() :', typeof f);

if (typeof x === 'undefined') {

}

console.log('undefined === null :', undefined === null);
console.log('undefined == null :', undefined == null);
console.log('');
console.log('undefined == false :', undefined == false);
console.log('0 == false :', 0 == false);
console.log('[] == false :', [] == false);
console.log('{} == false :', {} == false);
console.log('"" == false :', "" == false);
console.log('null == false :', null == false);
console.log('');
console.log('NaN === NaN :', NaN === NaN);
console.log('NaN == NaN :', NaN == NaN);
console.log('');
console.log('typeof undefined :', typeof undefined);

if (!""){
    console.log('"" 转化为false');
}
if (!undefined){
    console.log('undefined 转化为false');
}
if (!null){
    console.log('null 转化为false');
}
if (!0){
    console.log('0 转化为false');
}
if (!NaN){
    console.log('NaN 转化为false');
}
if ([]){
    console.log('[] 转化为true');
}
if ({}){
    console.log('{} 转化为true');
}

console.log('Number(false) :', Number(false));
console.log('Number(null) :', Number(null));
console.log('Number(undefined) :', Number(undefined));
console.log('Number("") :', Number(""));
console.log('Number([]) :', Number([]));
console.log('Number({}) :', Number({}));
console.log('Number(NaN) :', Number(NaN));
console.log('');
console.log('undefined == true :', undefined == true);
console.log('null == true :', null == true);
console.log('');
console.log('Boolean([]) :', Boolean([]));
console.log('Boolean({}) :', Boolean({}));
