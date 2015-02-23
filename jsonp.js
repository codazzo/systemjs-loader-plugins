import _ from 'underscore';

export function locate(load) {
    var id = _.uniqueId('jsonpScriptLoadFunc');
    var path = '//' + load.name + '&callback=' + id;

    console.log(path);

    // var id = _.uniqueId('jsonpScriptLoadFunc'),
    //     url = req.toUrl(name + '&callback=' + id);


    return Promise.resolve(path);
}

export function instantiate(load) {
    var url = load.path;
    return new Promise(function (resolve, reject){

        // if(config.isBuild){
        //     resolve();
        //     return
        // }

        window[id] = function(){

            //IE8 borks when we try to delete
            //the window property, so clear it out instead
            // http://stackoverflow.com/questions/1073414/deleting-a-window-property-in-ie
            window[id] = undefined;
            try {
                delete window[id];
            }
            catch(e) {
            }

            resolve();
        };

        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        document.body.appendChild(script);
    })


}