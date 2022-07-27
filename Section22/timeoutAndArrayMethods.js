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

const numbersx3 = numbers.map((num) => {
    return num * 3;
});

setTimeout(() => {
    console.log("Hello.");
}, 3000);

const id = setInterval((() => (Math.random())), 2000);

clearInterval(id);

const evenNums = numbers.filter((num) => {
    return (num % 2 === 0);
});

const total = prices.reduce((total, price) => {
    return total + price;
});

const person = {
    firstName: "Morgan",
    lastName: "Andresen",
    fullName: () => {
        return (this.firstName + " " + this.fullName);
    }
}