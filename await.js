console.log('a');

console.log('b');

function printC()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('c');
            resolve();
        }, 1000)
    })
}

function printD()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('d');
            resolve();
        }, 1000)
    })
}


// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');

printC().then(() => {
    printD().then(() => {
        console.log('e');
    })
})