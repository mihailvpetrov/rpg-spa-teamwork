var expect = require("chai").expect;
var Soldier = require("../public/js/character");
var Mage = require("../public/js/character");
var Rogue = require("../public/js/character");

describe("Test create hero", function () {
    describe("Soldier", function () {
        var testhero = new Soldier("Testus", "male", "1", "0");
        it("Hero created", function () {
            return typeof(testhero) === 'object';
        });
        it("Name = Testus", function () {
            expect(testhero.name).to.equal("Testus");
        });
        it("Gender = male", function () {
            expect(testhero.gender).to.equal("male");
        });
        it("Level = 1", function () {
            expect(testhero.level).to.equal("1");
        });
        it("Experience = 0", function () {
            expect(testhero.experience).to.equal("0");
        });
    });
});

describe("Test create hero", function () {
    describe("Mage", function () {
        var testhero = new Rogue("Testus", "male", "1", "0");
        it("Hero created", function () {
            return typeof(testhero) === 'object';
        });
        it("Name = Testus", function () {
            expect(testhero.name).to.equal("Testus");
        });
        it("Gender = male", function () {
            expect(testhero.gender).to.equal("male");
        });
        it("Level = 1", function () {
            expect(testhero.level).to.equal("1");
        });
        it("Experience = 0", function () {
            expect(testhero.experience).to.equal("0");
        });
    });
});

describe("Test create hero", function () {
    describe("Rogue", function () {
        var testhero = new Rogue("Testus", "male", "1", "0");
        it("Hero created", function () {
            return typeof(testhero) === 'object';
        });
        it("Name = Testus", function () {
            expect(testhero.name).to.equal("Testus");
        });
        it("Gender = male", function () {
            expect(testhero.gender).to.equal("male");
        });
        it("Level = 1", function () {
            expect(testhero.level).to.equal("1");
        });
        it("Experience = 0", function () {
            expect(testhero.experience).to.equal("0");
        });
    });
});