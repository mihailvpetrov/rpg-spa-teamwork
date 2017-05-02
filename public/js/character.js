class Character {
    constructor(heroName, heroClass, heroLevel, gender, positionX = 0, positionY = 0) {
        this.name = heroName;
        this.class = heroClass;
        this.level = heroLevel;
        this.health = (this.level * 10) + 50;
        this.mana = (this.level * 5) + 30;
        this.experience = 0;
        this.positionX = positionX;
        this.positionY = positionY;
        this.gender = gender;
    }

    addExperience(amount) {
        var experienceNewValue = this.experience += amount;
        var amountForLevelUp = 100; // TODO: implement better leveling formula

        if (experienceNewValue >= amountForLevelUp) { // Level up logic
            this.level += Math.floor(experienceNewValue / amountForLevelUp);
            var experienceRemainingAfterLevelUp = experienceNewValue % amountForLevelUp;
            this.experience = experienceRemainingAfterLevelUp;
        } else {
            this.experience += amount;
        }
    }

    setPosition(x, y){
        this.positionX = x;
        this.positionY = y;
    }

    levelUp(amount){
        this.level += amount;
    }
}

class Soldier extends Character {
    constructor(heroName, gender, heroLevel, positionX = 0, positionY = 0) {
        this.name = heroName;
        this.class = "Soldier";
        this.gender = gender;
        this.level = heroLevel;
        this.experience = 0;
        this.positionX = positionX;
        this.positionY = positionY;
        this.moveSpeed = 1; // turns per round
        this.attackSpeed = 1; // attacks per round
        this.attackRange = 1; // how much boxes away to hit
        this.health = (this.level * 12) + 50;
        this.mana = (this.level * 5) + 30;
    }
}

class Mage extends Character {
    constructor(heroName, gender, heroLevel, positionX = 0, positionY = 0) {
        this.name = heroName;
        this.class = "Mage";
        this.gender = gender;
        this.level = heroLevel;
        this.experience = 0;
        this.positionX = positionX;
        this.positionY = positionY;
        this.moveSpeed = 1; // turns per round
        this.attackSpeed = 1; // attacks per round
        this.attackRange = 2; // how much boxes away to hit
        this.health = (this.level * 8) + 37;
        this.mana = (this.level * 10) + 35;
    }
}

class Rogue extends Character {
    constructor(heroName, gender, heroLevel, positionX = 0, positionY = 0) {
        this.name = heroName;
        this.class = "Rogue";
        this.gender = gender;
        this.level = heroLevel;
        this.experience = 0;
        this.positionX = positionX;
        this.positionY = positionY;
        this.moveSpeed = 1; // turns per round
        this.attackSpeed = 2; // attacks per round
        this.attackRange = 1; // how much boxes away to hit
        this.health = (this.level * 10) + 43;
        this.mana = (this.level * 6) + 28;
    }
}