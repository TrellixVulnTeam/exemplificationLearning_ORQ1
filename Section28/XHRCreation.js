const req = new XMLHttpRequest();

req.onload =  function() {
    console.log("it worked.")
    console.log(JSON.parse(this.response));
}; 

req.onerror = function() {
    console.log("error.");
    console.log(this);
};

req.open = ("GET", "https://swapi.dev/api/people/1")
req.send();