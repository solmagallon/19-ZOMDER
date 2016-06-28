// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "zombder-user-map-ec2",
        url: "mongodb://scotch:scotchrocks@ds051853.mongolab.com:51853/mean-map-app",
        port: 27017
    },

    local:
    {
        name: "zombder-user-map-local",
        url: "mongodb://localhost/MeanMapApp",
        port: 27017
    },

    localtest:
    {
        name: "zombder-user-map-local",
        url: "mongodb://localhost/MeanMapAppTest",
        port: 27017
    }

};
