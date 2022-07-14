import inquirer from "inquirer"

class Dinosaur {

    constructor(name, species) {
        this.name = name
        this.species = species
        this.hunger = 50
        this.happiness = 50
        this.health = 100
    }

    feed() {
        
    }

    play() {

    }

    check() {
        console.log(`${this.name}'s hunger level: ${this.hunger}`)
        console.log(`${this.name}'s happiness level: ${this.happiness}`)
        console.log(`${this.name}'s health: ${this.health}`)
    }

}

// GENERATE A RANDOM NUMBER 1-10

function randomNumber () {
    return Math.floor(Math.random()*10) - 1
}

// GAME SETUP

const questions = [
    {
        type: "input",
        name: "name",
        message: "Dinosaur name"
    },
    {
        type: "list",
        name: "species",
        message: "Choose your dinosaur's species",
        choices: ["Tyrannosaurus Rex", "Triceraptops", "Velociraptor", "Raptor", "Pterodactyl", "Triceraptor"],
        filter(val) {
            return val
          }
    },
]

// GAME START 

console.log("Welcome to Dinogotchi!\nCreate a pet and have fun!")

inquirer
  .prompt(questions)
  .then(() => {
    inquirer.prompt({
        type: "confirm",
        name: "confirm",
        message: "Start game?"
    })
  })

function game() {

}
  

game();