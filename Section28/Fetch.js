fetch("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("resolved. ", res);
        res.json().then(data => console.log("json done. ", data));
        return fetch("https://swapi.dev/api/people/2");
    })
    .then(data => {
        console.log("2nd request resolved. ", data);
        data.json().then(data => console.log("json done. ", data));
    })
    .catch(e => {
        console.log("error. ", e)
    })

const loadStarWarsPeople = async() => {
    const res = await fetch("https://swapi.dev/api/people");
    const data = res.json();
    console.log(data);
};

loadStarWarsPeople();