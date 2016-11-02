var ResponseService = require('../services/ResponseService');
module.exports = {

    test: function(req, res){
        console.log('in route test of test controller');
        res.send(ResponseService.api.success('testing method of test controller response ...'));
    }
};
