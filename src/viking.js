// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  //methods

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  //methods

  attack() {
    return super.attack();
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health !== 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  //methods

  attack() {
    return super.attack();
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  //Methods

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let oneSaxon = this.saxonArmy[indexSaxon];
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let oneViking = this.vikingArmy[indexViking];
    let result = oneSaxon.receiveDamage(oneViking.strength);
    if (oneSaxon.health <= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }
    return result;
  }

  saxonAttack() {
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let oneSaxon = this.saxonArmy[indexSaxon];
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let oneViking = this.vikingArmy[indexViking];
    let result = oneViking.receiveDamage(oneSaxon.strength);
    if (oneViking.health <= 0) {
      this.vikingArmy.splice(indexViking, 1);
    }
    return result;
  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    }else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


let ragnar = new Viking ("ragnar", 200, 100)
console.log(ragnar.battleCry());

let war1 = new War 
war1.addViking(ragnar);
console.log(war1.vikingArmy)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
