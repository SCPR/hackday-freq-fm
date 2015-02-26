App.Collections.WaterIncentives = Backbone.Collection.extend({

    model: App.Models.WaterIncentive,

    url: "data/incentives_by_district.json",

});