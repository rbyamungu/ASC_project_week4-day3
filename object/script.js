const rene = {
    fullName:"Rene Byamungu Ruhigita",
    shortName:"Rene",
    favColor:"red",
    favSportTeam:"Barcelona",
    favFood:"mac-cheese",
    favVideoGame:"GTA V",
    hairType:"M",

    "intro": function() {
        console.log(`Hi. My name is ${this.shortName} `);
    }
}


rene.intro()

const grevie = {
    fullName:"Grevie Byamungu Ruhigita",
    shortName:"Grevie",
    favColor:"red",
    favSportTeam:"Barcelona",
    favFood:"mac-cheese",
    favVideoGame:"GTA V",
    hairType:"M",

    "intro": function() {
        console.log(`Hi. My name is ${this.shortName} `);
    }
}


grevie.intro()

console.log(`hey, Grevie. I'm hungry. Do you want to eat ${grevie['favFood']}`);
console.log(`No thanks, I profer ${grevie.favFood}. I know a store that has both!`);
console.log(`They go to Boddy's Burgers and Pies and have a lovely meal, both eating burgers and pizza. Gevie has changed his mind about his favorite food!`);

grevie.favFood = "pizza";

console.log(favFood);