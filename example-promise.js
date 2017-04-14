// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Vancouver', function(err, temp) {
//     if (err) {
//         console.log('error',err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         //if things go well call resolve
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         },1000);
//     });
// }

// //then method available on promises
// //second argument is error
// getTempPromise('Philadelphia').then(function(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err);
// });

//Challenge Area

function addPromise(a,b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('a & b need to be numbers');
        }
    });
}

addPromise(5,6).then(function(sum) {
    console.log('Success', sum);
}, function(error) {
    console.log('Error', error);
});


addPromise(5,'wassup').then(function(sum) {
    console.log('Success', sum);
}, function(error) {
    console.log('Error', error);
});

