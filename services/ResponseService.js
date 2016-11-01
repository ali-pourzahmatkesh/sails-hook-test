var _new = require('lodash');

module.exports = {

    api : {
        success : function (data, totalCount, offset, limit) {
            var successObj = {};
            if ( _new.isArray(data) ) {
                successObj = {
                    metadata : {
                        count : totalCount || data.length,
                        offset : offset || 0,
                        limit : limit || 30,
                        responseTime : new Date().getTime() - sails.config._time.responseTimeStart + ' Milli Seconds'
                    },
                    result : true,
                    data : data || []
                };
            } else {
                successObj = {
                    metadata : {
                        responseTime : new Date().getTime() - sails.config._time.responseTimeStart + ' Milli Seconds'
                    },
                    result : true,
                    data : data || {}
                };
            }

            return successObj;
        },

        error : function(errorKey, debug) {
            if ( _new.isObject(sails.config.datalink.errors[errorKey]) ) {
                return ResponseService.api._prepareError(
                    _new.extend(
                        sails.config.datalink.errors[errorKey],
                        {
                            debug : debug
                        }
                    )
                );
            } else {
                return ResponseService.api._prepareError(errorKey);
            }
        },

        _prepareError : function (error) {
            var errorObj = {};
            var rowErrorParam = _new.clone(error);
            if ( _new.isObject(error) ) {
                errorObj = {
                    status: error.status || 500,
                    code: error.code || null,
                    message: error.message || null,
                    description: error.description || null,
                    debug: error.debug || {}
                };

                if ( error.errors && error.errors.length ) {
                    errorObj.errors = error.errors;
                }

            } else {
                errorObj = _new.extend(
                    sails.config.datalink.errors.invalid_error_object,
                    {
                        debug : {
                            file: "/services/ResponseService.js",
                            nativeErrorParameter: rowErrorParam
                        }
                    }
                );
            }


            if ( _new.includes && ! _new.includes(['silly', 'verbose', 'info', 'debug'], sails.config.log.level) ) {
                delete errorObj.debug;
            }

            errorObj.result = false;
            errorObj.responseTime = new Date().getTime() - sails.config._time.responseTimeStart + ' Milli Seconds';
            return errorObj;

        }
    }


};