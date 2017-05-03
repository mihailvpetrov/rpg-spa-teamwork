function request(url, type, options, headers) {
    const promise = new Promise((resolve, reject) => $.ajax({
        url,
        type,
        options,
        headers,
        success: resolve,
        error: reject
    }));
}

function get(url) {
    return request(url, "GET", {}, {});
}

function post(url) {
    return request(url, "POST", {}, {});
}

function put(url) {
    return request(url, "PUT", {}, {});
}

const requester = {
    get,
    post,
    put
}

export {
    requester
};