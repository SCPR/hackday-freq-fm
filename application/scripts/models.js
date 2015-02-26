App.Models.User = Backbone.Model.extend({
    defaults: {
        uuid: null,
        user_name: null,
        user_avatar: null,
        following: null,
        user_role: null,
        history: null
    },
});

App.Models.Content = Backbone.Model.extend({
    defaults: {
        show_name: null,
        show_image: null,
        show_slug: null,
        episode_title: null,
        host: null,
        description: null,
        rss_url: null,
        public_url: null,
    },
});