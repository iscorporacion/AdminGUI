'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    HomeView = require('../views/home/home'),

    HeaderView = require('../views/header/header'),
    ProfileController;

ProfileController = Mn.Object.extend({

    profile: function() {
        console.log('router');

        App.layout.showChildView('headerRegion',
            new HeaderView({

            })
        );
        App.layout.showChildView('pageRegion',
            new HomeView({

            })
        );



    }
});
module.exports = ProfileController;