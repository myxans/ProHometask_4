let arr = [];

arr.push(15, 10, 5);

let summ = 0;
const array1 = arr;

array1.forEach(
    (char) => {
        summ += Number(char)
    }
);



alert(' first number is ' + arr.at(0) + ', last number is ' + arr.at(-1));
alert(arr.join(' + ') + ' = ' + summ);

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

alert(' max is ' + max + ', min is ' + min);

let num = prompt('Please enter one of the numbers which you entered before?');

if (num == arr[0] ) {
    alert('Ваше число под №1')
} else if (num == arr[1]) {
    alert('Ваше число под №2')
} else if (num == arr[2]) {
    alert('Ваше число под №3')
}else {
    alert('Sorry, you did not enter this number!')
};