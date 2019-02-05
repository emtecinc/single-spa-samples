define(["jquery",
    "backbone",
    "hbars!src/templates/car-composite-view-template",
    "src/views/car-view",
    "src/models/car-model",
    "backbone.marionette"],
    function ($, Backbone, template, CarView, CarModel) {
        return Backbone.Marionette.CompositeView.extend({
            itemViewContainer: "#car-container",
            itemView: CarView,
            template: template,
            events: {
                "click #add-car": "addCar"
            },
            addCar: function () {
                console.log("Button Clicked");
                var model = new CarModel();
                model.set({ name: 'Sample Name', company: 'Sample Company' });
                this.collection.add(model);
            }
        });
    });