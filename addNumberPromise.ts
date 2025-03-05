// Write a function that returns a promise. 
// The function should take two parameters and
// return their sum after a delay using setTimeout. 
// Additionally, demonstrate how you would call this function?

function addNumbersAsync(a: number,b: number, delay : number = 1000) : Promise <number> {
    return new Promise ((resolve,reject) => {
if(typeof a !== 'number' || typeof b !== 'number' ) {
    reject ('both parameters must be numbers');
} else {
    setTimeout(() => {
        resolve (a+b);
    },delay);
}
});
}
addNumbersAsync(5,10,2000)
.then(sum => console.log("sum:" , sum))
.catch(error => console.log("error: ",error));
