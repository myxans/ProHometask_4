let num1 = prompt('Вкажіть 1 число');
let num2 = prompt('Вкажіть 2 число');
let num3 = prompt('Вкажіть 3 число');

let arr = [];

arr.push(num1, num2, num3);

let summ = 0;
const array1 = arr;

array1.forEach(
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

alert(`first number is ${arr.at(0)}, last number is ${arr.at(-1)} \n ${arr.join(' + ')} = ${summ} \n max is ${max}, min is ${min}`);

let num = prompt('Please enter one of the numbers which you entered before?');

switch (num) {
    case arr[0]:
        alert(`Ваше число в списке # ${arr.indexOf + 1}`);
        break;
    case arr[1]:
        alert(`Ваше число в списке # ${arr.indexOf + 2}`);
        break;
    case arr[2]:
        alert(`Ваше число в списке # ${arr.indexOf + 3}`);
        break;
    default:
        alert('Sorry, you did not enter this number!')
}