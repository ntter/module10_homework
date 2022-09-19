let arr = [5, 12, 'hello', NaN, 34, '55', 28, 11, 192, 68]

let notNumbers = []
let evenNumbers = []
let oddNumbers = []

const newNumbers = arr.filter(function (value) {
    return !Number.isNaN(value);
});

for (let i of newNumbers) {
    if ((typeof i === 'number')) {
        var result = (i % 2  == 0 && i!=0) ? evenNumbers.push(i) : oddNumbers.push(i);    
    }
    else {
        notNumbers.push(i);
    } 
}


console.log('There are ' + evenNumbers.length + ' even Numbers and ' + oddNumbers.length + ' odd Numbers');