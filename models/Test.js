module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema : true,

    attributes : {

        username : {
            type : 'string',
            unique : true,
            required : true
        },


        email : {
            type : 'email',
            required : true,
            unique : true
        },


        firstname : {
            type : 'string',
            required : true
        },


        lastname : {
            type : 'string',
            required : true
        }

    }
}