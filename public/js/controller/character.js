class Character {
    constructor(name, gender, level, experience, positionX, positionY) {
        this._name = name;
        this._level = level * 1;
        this._experience = experience * 1;
        this._positionX = positionX;
        this._positionY = positionY;
        this._gender = gender;
    }

    addExperience(amount) {
        var experienceNewValue = this._experience += amount;
        var amountForLevelUp = 100; // TODO: implement better leveling formula

        if (experienceNewValue >= amountForLevelUp) { // Level up logic
            this._level += Math.floor(experienceNewValue / amountForLevelUp);
            var experienceRemainingAfterLevelUp = experienceNewValue % amountForLevelUp;
            this._experience = experienceRemainingAfterLevelUp;
        } else {
            this._experience += amount;
        }
    }

    setPosition(x, y) {
        this._positionX = x;
        this._positionY = y;
    }

    levelUp(amount) {
        this._level += amount;
    }
}

class Soldier extends Character {
    constructor(name, gender, level, experience, positionX, positionY) {
        super(name, gender, level, experience, positionX, positionY);
        this._class = "Soldier";
        this._moveSpeed = 1; // turns per round
        this._attackSpeed = 1; // attacks per round
        this._attackRange = 1; // how much boxes away to hit
        this._health = (this._level * 12) + 50;
        this._mana = (this._level * 5) + 30;
    }
}

class Mage extends Character {
    constructor(name, gender, level, experience, positionX, positionY) {
        super(name, gender, level, experience, positionX, positionY);
        this._class = "Mage";
        this._moveSpeed = 1; // turns per round
        this._attackSpeed = 1; // attacks per round
        this._attackRange = 2; // how much boxes away to hit
        this._health = (this._level * 8) + 37;
        this._mana = (this._level * 10) + 35;
    }
}

class Rogue extends Character {
    constructor(name, gender, level, experience, positionX, positionY) {
        super(name, gender, level, experience, positionX, positionY);
        this._class = "Rogue";
        this._moveSpeed = 1; // turns per round
        this._attackSpeed = 2; // attacks per round
        this._attackRange = 1; // how much boxes away to hit
        this._health = (this._level * 10) + 43;
        this._mana = (this._level * 6) + 28;
    }
}

module.exports = Soldier, Mage, Rogue;