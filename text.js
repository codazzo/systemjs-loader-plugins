export function locate(load) {
    var path = load.name;

    return Promise.resolve(path);
}

export function instantiate(load) {
    var text = load.source;

    return Promise.resolve(text);
}

