import * as data from 'data';
import {load as loadTemplate} from 'templates';

const content = $("#content");

function showAllUsers(){
    Promise.all([
        loadTemplate("showAllUsers"),
        data.getUsers()
    ])
    .then(([template, users]) => {
        content.loadTemplate(showAllUsers);
    })
}