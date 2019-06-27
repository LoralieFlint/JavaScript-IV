// CODE here for your Lambda Classes

class GameObject {
    constructor (attributes) {
        //object
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
        //prototype
        destroy () {
            return `${this.name} was removed from the game.`;
    }
  }

  
  class CharacterStats /*inheretance*/ extends GameObject {
      constructor (characterAttributes) {
        super(characterAttributes);  
        //object
        this.healthPoints = characterAttributes.healthPoints;
    }
        //prototype
        takeDamage () {
            return `${this.name} took damage.`;
    }
  }


  class Humanoid /*inheritance*/ extends CharacterStats {
    constructor (appearance) {
        super(appearance);
        //object
        this.team = appearance.team;
        this.weapons = appearance.weapons;
        this.language = appearance.language;
    }
    //prototype
    greet () {
      return `${this.name} offers a greeting in ${this.language} .`;
    }
  } 

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
  console.log(archer);