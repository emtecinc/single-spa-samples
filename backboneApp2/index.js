require.config({
    baseUrl: 'app5',
    paths: {
        "jquery": 'js/jquery-3.3.1.min',
        "underscore": 'js/underscore-min',
        "backbone": 'js/backbone-min',
        "backbone.marionette": "js/backbone.marionette",
        "Handlebars": "js/handlebars",
        "text": "js/text",
        "hbars": "js/hbars"
    },
    shim: {
        // third-party libraries shims
        "jquery": {
            deps: ["require"],
            exports: "$"
        },
        "underscore": {
            deps: ["jquery"],
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "backbone.marionette": {
            deps: ["backbone"]
        },
        Handlebars: {
            exports: 'Handlebars'
        }
    },
    deps: ["src/app"]
});

require(['jquery', 'backbone', 'src/app'], function ($, Backbone, Router) {
    var router = new Router();
    try {
        Backbone.history.start();
    }
    catch (err) {
        console.log(err);
    }

});