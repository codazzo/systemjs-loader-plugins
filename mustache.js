import mustache from 'lib/mustache'; //BAD: this should not be hardcoded 

export function locate(load) {
    var path =  '/' + load.name + '.template';

    return Promise.resolve(path);
}

export function instantiate(data){
    var template = data.source;
    mustache.parse(template); //caches it

    return Promise.resolve(mustache.render.bind(null, template));

}