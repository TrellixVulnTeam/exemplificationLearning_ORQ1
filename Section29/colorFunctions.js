function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r, g, b} = this; 
        return "rbg(" + r + ", " + g + ", " + b + ")";
    };

    color.hex = function () {
        const {r, g, b} = this; 
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
}

const firstColor = makeColor(35, 255, 100);
firstColor.hex();

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
}

const var1 = new Color(0, 0, 0);

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    greet() {
        console.log("hi");
    }

    rgb() {
        return "rbg(" + this.r + ", " + this.g + ", " + this.b + ")";
    }

    hex() {
        return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
}