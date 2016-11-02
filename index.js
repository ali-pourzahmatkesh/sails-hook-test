module.exports = function(sails) {
    var loader = require('sails-util-mvcsloader')(sails);

    // Load policies under ./api/policies and config under ./config
    loader.configure();

    /*
     OR if you want to set a custom path :

     loader.configure({
     policies: __dirname + '/api/policies',// Path to your hook's policies
     config: __dirname + '/config'// Path to your hook's config
     });
     */

    return {
        initialize: function (next) {
            /*
             Load models under ./api/models
             Load controllers under ./api/controllers
             Load services under ./api/services
             */
            loader.inject(function (err) {
                return next(err);
            });

            /*
             OR if you want to set a custom path :

             loader.inject({
             controllers: __dirname + '/controllers', // Path to your hook's controllers
             models: __dirname + '/models', // Path to your hook's models
             services: __dirname + '/services' // Path to your hook's services
             }, function (err) {
             return next(err);
             });
             */
        }
    };
}