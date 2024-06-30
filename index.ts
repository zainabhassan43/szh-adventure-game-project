#! /usr/bin/env node


import inquirer  from "inquirer";



// .....................game variablr..........................//

let enemies = ["skeleton", "zombie", "warrior", "Assassian"]
let maxEnemyHealth = 75
let enemyAttackDamageToHero = 25

// .....................PLAYER VARIABLE......................//

let heroHealth = 100
let attackDamageToEnemy = 50
let numHealthPotion = 3
let healthpotionhealAmount = 30
let healthPotionDropChance = 50

// ......................WHILE LOOP CONDITION.............//


let gameRunning = true

console.log("Welcome to Deadzone!");


Game:
while (gameRunning) {
    let EnemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1)
    let enemyIndex = Math.floor(Math.random() *enemies.length)
    let enemy = enemies[enemyIndex]

    console.log(`# ${enemy} has appeared #\n`);

        while (EnemyHealth > 0){
            console.log(`Your Health: ${heroHealth}`);
            console.log(`${enemy} Health: ${EnemyHealth}`);

            let options = await inquirer.prompt({
                name: "ans",
                type: "list",
                message: "what whould you like to do",
                choices: ["1. Attack", "2. Take Health potion", "3. Run"]
            })
               if(options.ans === "1. Attack"){
         let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1 )  
         let danmagetoHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1) 
         
         EnemyHealth -= damageToEnemy
         heroHealth -= danmagetoHero

         console.log(`you strike the ${enemy} for ${damageToEnemy}`);
         console.log(`${enemy} strike you for ${danmagetoHero} damage.`);

         if(heroHealth < 1){
            console.log("you have too much damage. you are too weak to continue.");
            break;
         }
         
        }
      
         else if(options.ans === "2. Take Health potion"){
           if(numHealthPotion > 0){
            heroHealth += healthpotionhealAmount
            numHealthPotion--

            console.log(`you use health potion for ${healthpotionhealAmount}`);
            console.log(`you now have ${heroHealth} health`);
            console.log(`you have ${numHealthPotion} health potions left.`);
            }else{
            console.log(`you have no health potions left. defeat enemy for a chance to get health potion`);
             }

         }
           else if(options.ans === "3. Run"){
            console.log(`you run away from ${enemy}`);
            continue Game;
           }
         }
            if (heroHealth < 1){
            console.log(`you are out from battle. you are too weak.`);
            break
         }
               console.log(`${enemy} was defeated!`);
               console.log(`you have ${heroHealth} health.`);

               let randomNumber = Math.floor(Math.random() * 100 + 1)
               if(randomNumber < healthPotionDropChance){
                numHealthPotion++

                console.log(`enemy give you health potion`);
                console.log(`your health is ${heroHealth}`);
                console.log(`your health potion is ${numHealthPotion}`);
                 }

                 let userOption =await inquirer.prompt({
                    name: "ans",
                    type: "list",
                    message: "what would you like to do now",
                    choices: ["1. Continue", "2. Exit"]
                 })
                     if(userOption.ans === "1. continue"){
                        console.log("you are continue on your adventure");

                      }else{
                        console.log("you successfully Exit from Deadzone");
                        break;
                      }

                      console.log("thank you for playing.\n");

}
