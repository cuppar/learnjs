var obj = {
    foo: 'hello',
    bar: 'world'
};

for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i);
    }
}
