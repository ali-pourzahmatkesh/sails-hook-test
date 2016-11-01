module.exports = function(sails) {

    return {
        defaults: {},
        initialize: function (cb) {

            var TestModel = require('./models/Test');
            TestModel.identity = 'test';
            TestModel.globalid = 'Test';


            sails.models['test'] = TestModel;
            return cb();
        }
    }
}