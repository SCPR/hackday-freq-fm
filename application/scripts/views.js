    App.Router = Backbone.Router.extend({
        initialize: function(){
            this.applicationWrapper = new App.Views.ApplicationWrapper();
            return this.applicationWrapper;
        },

        routes: {
            "": "renderApplicationVisuals",
        },

        renderApplicationVisuals: function(){

            if (this.applicationVisuals){
                this.applicationVisuals.remove();
            };


            this.applicationVisuals = new App.Views.IntroScreen({
                container: ".data-visuals"
            });


            return this.applicationVisuals;

        },

    });




    // intro screen
    App.Views.IntroScreen = Backbone.View.extend({
        template: template("templates/data-visuals.html"),
        el: ".data-visuals",
        initialize: function(viewObject){
            this.render(viewObject);
        },

        events: {

        },

        render: function(viewObject){
            $(viewObject.container).html(_.template(this.template));
        }
    });



    // login screen
    App.Views.LoginScreen = Backbone.View.extend({
        //template: template("templates/data-visuals.html"),
        //el: ".data-visuals",
        //initialize: function(viewObject){
            //this.render(viewObject);
        //},
        //events: {
            ///
        //},
        //render: function(viewObject){
            //$(viewObject.container).html(_.template(this.template));
        //}
    });


    // follow shows
    App.Views.FollowShows = Backbone.View.extend({
        //template: template("templates/data-visuals.html"),
        //el: ".data-visuals",
        //initialize: function(viewObject){
            //this.render(viewObject);
        //},
        //events: {
            ///
        //},
        //render: function(viewObject){
            //$(viewObject.container).html(_.template(this.template));
        //}
    });



    // follow people
    App.Views.FollowPeople = Backbone.View.extend({
        //template: template("templates/data-visuals.html"),
        //el: ".data-visuals",
        //initialize: function(viewObject){
            //this.render(viewObject);
        //},
        //events: {
            ///
        //},
        //render: function(viewObject){
            //$(viewObject.container).html(_.template(this.template));
        //}
    });



    // recommendations
    App.Views.Recommendations = Backbone.View.extend({
        //template: template("templates/data-visuals.html"),
        //el: ".data-visuals",
        //initialize: function(viewObject){
            //this.render(viewObject);
        //},
        //events: {
            ///
        //},
        //render: function(viewObject){
            //$(viewObject.container).html(_.template(this.template));
        //}
    });


    // recommendations
    App.Views.Trends = Backbone.View.extend({
        //template: template("templates/data-visuals.html"),
        //el: ".data-visuals",
        //initialize: function(viewObject){
            //this.render(viewObject);
        //},
        //events: {
            ///
        //},
        //render: function(viewObject){
            //$(viewObject.container).html(_.template(this.template));
        //}
    });