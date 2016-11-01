module.exports = function(sails) {

    return {
        defaults: {},
        initialize: function (cb) {

            var ModelA = require('./models/ModelA');
            ModelA.identity = 'modela';
            ModelA.globalid = 'ModelA';

            var ModelB = require('./models/ModelB');
            ModelB.identity = 'modelb';
            ModelB.globalid = 'ModelB';

            sails.models['modela'] = ModelA;
            sails.models['modelb'] = ModelB;

            return cb();
        }
    }
}