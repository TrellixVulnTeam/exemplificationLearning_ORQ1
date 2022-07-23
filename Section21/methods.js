const math = {
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    },
    square: function(x) {
        return x * x;
    },
    cube: function(x) {
        return x ** 3;
    }
}

math.cube(2); // returns 8

const cat = {
    name: "Blue Steele",
    color: "grey",
    meow() {
        console.log(this.name + " says oh yampanose, oh yampanose, oh, oh, oh, oh, oh, oh, oh yampanose.");
    }
}

try {
    hello.toUpperCase();
} catch {
    console.log("error.");
}

function yell(msg) {
    try { 
        console.log(msg.toUpperCase().repeat(3));
    } catch {
        console.log(error);
        console.log("Please pass a string instead.")
    } 
}
