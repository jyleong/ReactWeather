var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name) {
//     console.log('forEach:', name);
// })

// names.forEach((name) => {
//     console.log('arrow:', name);
// })

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Andrew'));

// var person = {
//     name: 'Andrew',
//     greet: function() {
//         // names.forEach(function(name) {
//         //     // when you create anon functions
//         //     // we update the 'this' binding 
//         //     console.log(this.name + ' says hi to ' + name);
//         // });
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };

// person.greet();

// Challenge Area

function add(a,b) {
    return a + b;
}
// arrow function
var addStatement = (a,b) => {
    return a + b;
}

var addExpression = (a,b) => a + b;

console.log(addStatement(4,7));
console.log(addExpression(3,-2));

console.log(add(3,5));
console.log(add(9,0));
