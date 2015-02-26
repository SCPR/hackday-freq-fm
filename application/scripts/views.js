    App.Router = Backbone.Router.extend({

        initialize: function(){

            window.UsersCollection = new App.Collections.Users();

            window.UsersCollection.fetch({
                async: false,
            });


        },

        routes: {
            "": "renderWelcomeScreen",

            "welcome/": "renderWelcomeScreen",

            "sign-in/": "renderLogInScreen",

            "follow-shows/": "renderFollowShowsScreen",

            "follow-people/": "renderFollowPeopleScreen",

            "recommendations/": "renderRecommendationsScreen",

        },

        renderWelcomeScreen: function(){

            console.log("renderWelcomeScreen");

            if (this.applicationWelcomeScreen){
                this.applicationWelcomeScreen.undelegateEvents();
            }

            this.applicationWelcomeScreen = new App.Views.WelcomeScreen({
                container: ".data-details"
            });

            return this.applicationWelcomeScreen;

        },

        renderLogInScreen: function(){

            console.log("renderLogInScreen");

            this.applicationLogInScreen = new App.Views.LogInScreen({
                container: ".data-details"
            });

            return this.applicationLogInScreen;

        },

        renderFollowShowsScreen: function(){

            console.log("renderFollowShowsScreen");

            if (this.applicationFollowShowsScreen){
                this.applicationFollowShowsScreen.undelegateEvents();
            }

            this.applicationFollowShowsScreen = new App.Views.FollowShowsScreen({
                container: ".data-details"
            });

            return this.applicationFollowShowsScreen;

        },

        renderFollowPeopleScreen: function(){

            console.log("renderFollowPeopleScreen");

            if (this.applicationFollowPeopleScreen){
                this.applicationFollowPeopleScreen.undelegateEvents();
            }

            this.applicationFollowPeopleScreen = new App.Views.FollowPeopleScreen({
                container: ".data-details"
            });

            return this.applicationFollowPeopleScreen;

        },

        renderRecommendationsScreen: function(){

            console.log("renderRecommendationsScreen");

            $(".data-details").empty();

            this.applicationRecommendationsScreen = new App.Views.RecommendationsScreen({
                container: ".data-details"
            });

            return this.applicationRecommendationsScreen;

        },

    });


    // welcome screen
    App.Views.WelcomeScreen = Backbone.View.extend({

        el: "body",

        template: template("templates/welcome.html"),

        initialize: function(object){
            this.render(object.container);
        },

        events: {
            "click .next-step button": "navigateToSignIn",
        },

        render: function(container){
            $(container).html(_.template(this.template));
        },

        navigateToSignIn: function(){
            console.log("navigate to next view");
            window.app.navigate("#sign-in/", {
                trigger: true,
                replace: false,
            });
        }

    });

    // login screen
    App.Views.LogInScreen = Backbone.View.extend({

        el: ".data-details",

        template: template("templates/sign-in.html"),

        initialize: function(object){
            this.render(object.container);
        },

        events: {
            "click .nav--back": "navigateToWelcome",
            "click button.action--follow-shows": "navigateToShows",
        },

        render: function(container){
            $(container).html(_.template(this.template));
        },

        navigateToWelcome: function(){
            window.app.navigate("#welcome/", {
                trigger: true,
                replace: false,
            });
        },

        navigateToShows: function(){
            window.app.navigate("#follow-shows/", {
                trigger: true,
                replace: false,
            });
        }

    });

    // follow shows
    App.Views.FollowShowsScreen = Backbone.View.extend({

        el: ".data-details",

        template: template("templates/follow-shows.html"),

        initialize: function(object){
            this.render(object.container);
        },

        events: {
            "click .action--follow-shows": "navigateToPeople",
            "click .follow-shows .btn--small": "userFollowing",
        },

        render: function(container){
            $(container).html(_.template(this.template, {
                collection: window.UsersCollection.toJSON()
            }));
        },

        navigateToPeople: function(){
            window.app.navigate("#follow-people/", {
                trigger: true,
                replace: false,
            });
        },

        userFollowing: function(e){
            var myButton = e.target;
            var following = $(myButton).hasClass("btn--green");
            if (following === true){
                $(myButton).removeClass("btn--green");
                $(myButton).addClass("btn--blue");
                $(myButton).removeClass("btn--filled");
                $(myButton).html("Follow");
            } else {
                $(myButton).removeClass("btn--blue");
                $(myButton).addClass("btn--green");
                $(myButton).addClass("btn--filled");
                $(myButton).html("Following");
            }
        }

    });

    // follow people
    App.Views.FollowPeopleScreen = Backbone.View.extend({

        el: ".data-details",

        template: template("templates/follow-friends.html"),

        initialize: function(object){
            this.render(object.container);
        },

        events: {
            "click .action--reccomendations": "navigateToPeople",
            "click .follow-friends .btn--small": "userFollowing",
        },

        render: function(container){
            $(container).html(_.template(this.template, {
                collection: window.UsersCollection.toJSON()
            }));
        },

        navigateToPeople: function(){
            window.app.navigate("#recommendations/", {
                trigger: true,
                replace: false,
            });
        },

        userFollowing: function(e){
            var myButton = e.target;
            var following = $(myButton).hasClass("btn--green");
            if (following === true){
                $(myButton).removeClass("btn--green");
                $(myButton).addClass("btn--blue");
                $(myButton).removeClass("btn--filled");
                $(myButton).html("Follow");
            } else {
                $(myButton).removeClass("btn--blue");
                $(myButton).addClass("btn--green");
                $(myButton).addClass("btn--filled");
                $(myButton).html("Following");
            }
        }

    });

    // recommendations
    App.Views.RecommendationsScreen = Backbone.View.extend({

        el: ".data-details",

        template: template("templates/recommendations.html"),

        initialize: function(object){

            console.log("recommendations");

            window.ContentCollection = new App.Collections.ContentStreams();
            window.ContentCollection.fetch({
                async: false,
            });

            console.log(window.ContentCollection);

            this.render(object.container);

        },

        render: function(container){
            $(container).html(_.template(this.template));
        },



        /*
        events: {
            "click .nav--back": "navigateToWelcome",
        },


        navigateToWelcome: function(){
            window.app.navigate("#welcome/", {
                trigger: true,
                replace: false,
            });
        }
        */


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