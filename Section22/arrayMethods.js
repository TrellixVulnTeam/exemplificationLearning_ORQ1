const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function print(element) {
    console.log(element);
}

numbers.forEach(print);

numbers.forEach(function (el) {
    console.log(el); 
});

const numbersx2 = numbers.map(function (num) {
    return num * 2;
});