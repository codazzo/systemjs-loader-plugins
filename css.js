export function locate(load) {
    var path = load.name;

    return Promise.resolve(path);
}

export function fetch(load, fetch) {
    var path = load.address;

    /*globals document*/
    // Heavily inspired by: http://javascript.nwbox.com/CSSReady/cssready.html
    function cssReady(link, fn) {
        var type = document.createStyleSheet,
            rules = type ? 'rules' : 'cssRules',
            sheet = type ? 'styleSheet' : 'sheet';

        function check() {
            try {
                return link && link[sheet] && link[sheet][rules] && link[sheet][rules][0];
            } catch (e) {
                return false;
            }
        }

        (function poll() {
            if(check()){
                return setTimeout(fn, 0);
            }
            setTimeout(poll, 50);
        })();
    }

    return new Promise(function(resolve, reject) {
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = '/' + path + '.css';

        // if (config.isBuild) {
        //     resolve();
        //     return;
        // }

        cssReady(link, function(){
            resolve('loaded');
        });

        document.getElementsByTagName("head")[0].appendChild(link);
    })
}

export function instantiate() {
    //just resolve the promise: the CSS has been appended to the DOM
    return Promise.resolve('ok');
}
