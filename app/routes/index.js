const nobelistRoutes = require("./nobelist_routes");
module.exports  = function(app,db) {
    nobelistRoutes(app,db);
};
    
