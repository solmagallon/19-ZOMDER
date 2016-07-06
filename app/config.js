// Sets the MongoDB Database options

module.exports = {

  /*  mongolab:
    {
        name: "zombder-user-map-ec2",
        url: "",
        port: 27017
    },
*/
    local:
    {
        name: "zombder-user-map-local",
        url: "mongodb://localhost/ZombderMapApp",
        port: 27017
    },

    localtest:
    {
        name: "zombder-user-map-local",
        url: "mongodb://localhost/ZombderMapAppTest",
        port: 27017
    }

};
