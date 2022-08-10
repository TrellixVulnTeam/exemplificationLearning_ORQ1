axios.get("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("response: ", res);
    })
    .catch((e) => {
        console.log("error: ", e);
    })

const getDadJoke = async function() {
    const config = { header: {Accept: "applications/json"}}
    const res = await axios.get("https://icanhazdadjoke.com", config);
    console.log(res);    
}