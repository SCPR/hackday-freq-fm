App.Collections.Users = Backbone.Collection.extend({
    model: App.Models.User,
    url: "data/application_users.json",
});

App.Collections.ContentStreams = Backbone.Collection.extend({
    model: App.Models.Content,
    url: "data/application_content.json",
});