define(["jquery",
    "backbone",
    "hbars!src/templates/car-template",
    "backbone.marionette"],
    function ($,
        Backbone,
        template) {
        return Backbone.Marionette.ItemView.extend({
            tagName: "tr",
            initialize: function () {
                console.log("In constructor");
                this.listenTo(this, "event:xyz", this.xyz);
            },
            template: template,
            modelEvents: {
                "change": "modelChanges"
            },
            events: {
                "click .hook-remove-car": "removeCar"
            },
            removeCar: function () {
                this.model.collection.remove(this.model);
            },
            modelChanges: function () {
                console.log("In Model Change event");
            }
        });
    });