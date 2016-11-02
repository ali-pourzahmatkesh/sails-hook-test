module.exports = function(sails) {

    return {
        defaults: {},
        configure: function(){
/*            sails.config.policies = {
                '*': false
            };*/
        },
/*        routes: {
            before: {
                'GET /test': 'TestController.test'
            }
        },*/
        initialize: function (cb) {

            sails.on('router:before', function () {

                sails.router.bind('GET /test', 'TestController.test');

            });

            var TestModel = require('./models/Test');
            TestModel.identity = 'test';
            TestModel.globalid = 'Test';


            sails.models['test'] = TestModel;
            return cb();
        }
    }
}