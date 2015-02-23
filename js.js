export function locate(load) {
    var path = load.name + '.js';

    return Promise.resolve(path);
}

export function instantiate(load) {
    var source = load.source;

    eval(source); //YOLO
    return Promise.resolve('ok');
}

