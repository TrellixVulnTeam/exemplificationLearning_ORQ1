const fakeRequest = (url) => {
    return new Promise((resolve, reject) => { // saves the Promise to the fakeRequest variable
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.7) {
                resolve("fake data was passed");
            } else {
                reject("error");
            }
            
        }, 1000)
    })
}

fakeRequest("/dogs/1")
    .then(() => {
        console.log("Done with request.")
        console.log("data is: " + (data))
    })
    .catch(() => {
        console.log("oh no! " + (err))
    })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color; 
            resolve();
        }, delay);
    })
}

delayedColorChange("red", 1000)
    .then(() => delayedColorChange("orange", 1000))
    .then(() => delayedColorChange("yellow", 1000))
    .then(() => delayedColorChange("green", 1000))
    .then(() => delayedColorChange("blue", 1000))


async function hello() {
    return "hello";
}

hello()
    .then((data) => {
        console.log("promised resolved with " + data);
    })
    .catch((error) => {
        console.log("promise rejected " + error);
    })

const login = async (username, password) => {
     if (!username || !username) {
        throw "missing credentials";
     }
     if (password === "yampasnout") {
        return "welcome";
     }
     throw "invalid password";
}

login("qwerty", "yampasnout")
    .then(msg => {
        console.log("logged in");
    })
    .catch(err => {
        console.log("error: " + err);
    })

async function ranboo() {
    await delayedColorChange("red", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("indigo", 1000);
    return "all done!";
}