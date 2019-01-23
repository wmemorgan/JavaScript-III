/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt,
  this.dimensions = attributes.dimensions
}

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`
}


/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats (attributes) {
  //Inherit GameObject attributes
  GameObject.call(this, attributes)
  this.healthPoints = attributes.healthPoints,
  this.name = attributes.name
}

//Inherit GameObject prototypes
CharacterStats.prototype = Object.create(GameObject.prototype)

//Create a new prototype function
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

function Humanoid(attributes) {
  CharacterStats.call(this, attributes)
  this.team = attributes.team,
  this.weapons = attributes.weapons,
  this.language = attributes.language,
  this.attackPoints = attributes.attackPoints,
  this.opponent = attributes.opponent
}
//Inherit prototype functions from CharacterStats object
Humanoid.prototype = Object.create(CharacterStats.prototype)

//Add prototype function
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`
}


// Test your work by un-commenting these 3 objects and the list of console logs below
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

//Add an attack method
Humanoid.prototype.attack = function (opponent) {
  opponent.healthPoints = opponent.healthPoints - this.attackPoints
  if (damage === 0) {
    opponent.destroy()
  }
}

function Villain (attributes) {
  Humanoid.call(this, attributes)
  this.affliation = 'Villian'
}

Villain.prototype = Object.create(Humanoid.prototype)
Villain.prototype.warCry = function () {
  return `${this.affliation}s will conquer the world!`
}

function Hero (attributes) {
  Humanoid.call(this, attributes)
  this.affliation = 'Hero'
}

Hero.prototype = Object.create(Humanoid.prototype)
Hero.prototype.battleCry = function () {
  return `${this.affliation}es will save the world, YO JOE!!!`
}

const sorcerer = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Raistlin',
  team: 'Wizard of High Sorcery',
  weapons: [
    'Staff of Magius',
  ],
  language: 'Common Tongue',
  attackPoints: 2
});

const warrior = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Caramon',
  team: 'Heroes of the Lance',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
  attackPoints: 3
});

//Background story
function backStory (character) {
  return `${character.name} is a ${character.affliation} and member of the ${character.team}.`
}
console.log(backStory(sorcerer))
console.log(backStory(warrior))

  