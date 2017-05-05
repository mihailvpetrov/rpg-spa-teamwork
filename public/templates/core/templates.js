import {
    getRequest
} from 'requester';

function load(templateName) {
    return getRequest("../templates/${templateName}.handlebars")
        .then(returnedTemplate => {
            const compiledTemplate = Handlebars.compile(returnedTemplate);
            return Promise.resolve(compiledTemplate);
        });
}