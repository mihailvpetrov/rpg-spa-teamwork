import {
    requester
} from "requester";

function getUsers() {
    return requester.get("api/users");
}

function postUsers() {
    return requester.post("api/users");
}

function getMaps() {
    return requester.get("api/maps");
}

function getCharacters() {
    return requester.get("api/characters");
}

function postCharacters() {
    return requester.post("api/characters");
}