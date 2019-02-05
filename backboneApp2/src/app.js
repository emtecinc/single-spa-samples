
define(["jquery", "backbone", "backbone.marionette"],
	function ($, Backbone) {
		var Workspace = Backbone.Router.extend({

			routes: {
				"app5": "about",
				"app5/home": "home",
				"app5/about": "about"
			},

			home: function () {
				require(["src/views/car-view", "src/models/car-model"], function (CarView, CarModel) {
					var carModel = new CarModel();
					carModel.fetch().done(function () {
						var car = new CarView({ model: carModel });
						MyApp.appRegion.show(car);
					});
				});
			},

			about: function () {
				require(["src/views/car-composite-view", "src/collections/car-collections"], function (CarView, Cars) {
					var carCollection = new Cars([{
						"name": "City",
						"company": "Honda",
						"modelYear": 2008
					}]);
					var cars = new CarView({ collection: carCollection });
					MyApp.appRegion.show(cars);
				});
			}

		});
		MyApp = new Backbone.Marionette.Application;
		MyApp.addRegions({
			appRegion: '#shell-container'
		});
		MyApp.addInitializer(function () {
			console.log("App Started - initializer");
		});

		return Workspace;
	});

