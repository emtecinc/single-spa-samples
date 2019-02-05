define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        LayoutView = require('app/views/Layout'),
        HomeView = require('app/views/Home'),

        $shellcontainer = $('#shell-container'),
        layoutView = new LayoutView({ el: $shellcontainer }).render(),
        $content = $("#content", layoutView.el),
        homeView = new HomeView({ el: $content }).render();

    return Backbone.Router.extend({

        routes: {
            "app4": "home"
        },

        home: function () {
            layoutView.render();
            $content = $("#content", layoutView.el);
            homeView = new HomeView({ el: $content }).render();
        }
    });

});