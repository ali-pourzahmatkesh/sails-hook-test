module.exports = function (sails) {

    console.log('start loading hook test...');

    //Override http config here before hook initialisation
    var hookLoader = require('sails-util-mvcsloader')(sails);
    hookLoader.injectAll({
        policies: __dirname + '/api/policies',// Path to your hook's policies
        config: __dirname + "/config"// Path to your hook's config
    });

    return {
        defaults: {},

        initialize: function (cb) {

            console.log('start initialize hook test...');
            
            hookLoader.injectAll({
                controllers: __dirname + '/api/controllers', // Path to your hook's controllers
                models: __dirname + '/api/models', // Path to your hook's models
                services: __dirname + '/api/services' // Path to your hook's services
            }, function (err) {
                if (!err) {
                    console.log('end hook test...');
                }
                return cb(err);
            });

        }
    };
};