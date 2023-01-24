let num1 = prompt('3 chisla')

let arr = num1.split(',');

let summ = 0;

arr.forEach(
    (char) => {
        summ += Number(char)
    }
);


let max, min;

if (arr[0] > arr[1] && arr[0] > arr[2]) {
    max = arr[0] 
} else if (arr[1] > arr[0] && arr[1] > arr[2]) {
    max = arr[1]
} else {
    max = arr[2]
};


if (arr[0] < arr[1] && arr[0] < arr[2]) {
    min = arr[0]
} else if (arr[1] < arr[0] && arr[1] < arr[2]) {
    min = arr[1]
} else {
    min = arr[2]
};

alert(`first number is ${arr.at(0)}, last number is ${arr.at(-1)} 
${arr.join(' + ')} = ${summ} 
max is ${max}, min is ${min}`);

let element = prompt('Please enter one of the numbers which you entered before?');

switch (arr.indexOf(element)) {
    case arr.indexOf(arr[0]):
        alert(`Ваше число в списке #1`);
        break;
    case arr.indexOf(arr[1]):
        alert(`Ваше число в списке #2`);
        break;
    case arr.indexOf(arr[2]):
        alert(`Ваше число в списке #3`);
        break;
    default:
        alert('Sorry, you did not enter this number!')
}