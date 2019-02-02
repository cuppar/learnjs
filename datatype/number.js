console.log('0.1 + 0.2 === 0.3 :', 0.1 + 0.2 === 0.3);
console.log('0.3 / 0.1 :', 0.3 / 0.1);
console.log('(0.3 - 0.2) === (0.2 - 0.1) :', (0.3 - 0.2) === (0.2 - 0.1));
console.log(9007199254740992111);
console.log(017);
console.log('NaN === NaN :', NaN === NaN);
console.log('NaN == NaN :', NaN == NaN);
console.log('parseInt(\'123\') :', parseInt('123'));
console.log('parseInt(\'  123  \') :', parseInt('123'));
console.log('parseInt(1.23) :', parseInt(1.23));
console.log('parseInt(\'8a\') :', parseInt('8a'));
console.log('parseInt(\'12**\') :', parseInt('12**'));
console.log('parseInt(\'12.34\') :', parseInt('12.34'));
console.log('parseInt(\'15e2\') :', parseInt('15e2'));
console.log('parseInt(\'.3\') :', parseInt('.3'));
console.log('parseInt(\'\') :', parseInt(''));
console.log('parseFloat(\'\') :', parseFloat(''));
console.log('parseFloat(12.34e+2) :', parseFloat(12.34e+2));
console.log('isNaN(\'HELLO\') :', isNaN('HELLO'));
console.log('Number.isNaN(\'HELLO\') :', Number.isNaN('HELLO'));
console.log('Number.isNaN({}) :', Number.isNaN({}));
console.log('Number.isNaN([\'x\']) :', Number.isNaN(['x']));

function myIsNaN(value) {
    return typeof value === 'number' && isNaN(value);
}

function myIsNaN2(value){
    return value !== value;
}

