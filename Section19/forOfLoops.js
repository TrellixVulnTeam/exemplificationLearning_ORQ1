const subreddits = ["cringe", "funny", "memes", "chickens", "NFL", "soccer", "MCCIsland", "MinecraftChampionship"];

for (let sub of subreddits) {
    console.log("Visit r/" + sub + " on Reddit.")
}

const testScores = {
    keenan: 80,
    damon: 67, 
    kim: 89, 
    matt: 22,
    marlon: 78,
    russell: 39,
    cj: 2
}

for (let person in testScores) {
    console.log(person + ": " + testScores.person);
}

for (let score of Object.values(testScores)) {
    console.log(person + ": " + testScores.person);
}