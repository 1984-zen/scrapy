var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var add = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.14;

// module.exports.counter = counter;
// module.exports.add = add;
// module.exports.pi = pi;

module.exports = {
    counter: counter,
    add: add,
    pi: pi,
}


