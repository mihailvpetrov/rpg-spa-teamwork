var expect = require("chai").expect;
var Soldier = require("../public/js/controller/character");
var Mage = require("../public/js/controller/character");
var Rogue = require("../public/js/controller/character");

describe("Test heroes", function () {
    describe("Soldier", function () {
        var testhero = new Soldier("Testus", "male", "1", "0");
        it("Hero created", function () {
            return typeof (testhero) === 'object';
        });
        it("Name = Testus", function () {
            expect(testhero.name).to.equal("Testus");
        });
        it("Gender = male", function () {
            expect(testhero.gender).to.equal("male");
        });
        it("Level = 1", function () {
            expect(testhero.level).to.equal(1);
        });
        it("Experience = 0", function () {
            expect(testhero.experience).to.equal(0);
        });
        it("Add a level and level up", function () {
            testhero.levelUp(1);
            expect(testhero.level).to.equal(2);
        });
        it("Add 100 experience and level up", function () {
            testhero.addExperience(100);
            expect(testhero.level).to.equal(3);
        });
    });

    describe("Mage", function () {
        var testhero = new Rogue("Testus", "male", "1", "0");
        it("Hero created", function () {
            return typeof (testhero) === 'object';
        });
        it("Name = Testus", function () {
            expect(testhero.name).to.equal("Testus");
        });
        it("Gender = male", function () {
            expect(testhero.gender).to.equal("male");
        });
        it("Level = 1", function () {
            expect(testhero.level).to.equal(1);
        });
        it("Experience = 0", function () {
            expect(testhero.experience).to.equal(0);
        });
        it("Add a level and level up", function () {
            testhero.levelUp(1);
            expect(testhero.level).to.equal(2);
        });
        it("Add 100 experience and level up", function () {
            testhero.addExperience(100);
            expect(testhero.level).to.equal(3);
        });
    });

    describe("Rogue", function () {
        var testhero = new Rogue("Testus", "male", "1", "0");
        it("Hero created", function () {
            return typeof (testhero) === 'object';
        });
        it("Name = Testus", function () {
            expect(testhero.name).to.equal("Testus");
        });
        it("Gender = male", function () {
            expect(testhero.gender).to.equal("male");
        });
        it("Level = 1", function () {
            expect(testhero.level).to.equal(1);
        });
        it("Experience = 0", function () {
            expect(testhero.experience).to.equal(0);
        });
        it("Add a level and level up", function () {
            testhero.levelUp(1);
            expect(testhero.level).to.equal(2);
        });
        it("Add 100 experience and level up", function () {
            testhero.addExperience(100);
            expect(testhero.level).to.equal(3);
        });
    });
});