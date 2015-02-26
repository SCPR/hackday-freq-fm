App.Collections.Users = Backbone.Collection.extend({
    model: App.Models.User,
    url: "data/application_users.json",
    //url: "http://172.31.2.231:3000/#/users",
});

App.Collections.ContentStreams = Backbone.Collection.extend({
    model: App.Models.Content,
    url: "data/application_content.json",
});