module.exports = function(app,db,next) {
    app.post("/nobetler",function (req,res) {
    console.log(req.body);
    console.log(req.headers['content-type']);
    res.send("Nobetleri listeliyorum");
    });

/*
    app.get("/nobetler",function(req,res){
        req.getConnection(function(err,conn){
            if (err) return next("Cannot Connect");
                var query = conn.query('SELECT * FROM nobetciler',function(err,rows){
                    if(err){
                        console.log(err);
                        return next("Mysql error, check your query");
                    }
                    res.send(rows);
                });
        });
    });

    */

    app.get("/nobetler",function(req,res){
        req.getConnection(function(err,conn){
            if (err) return next("Cannot Connect");
                var query = conn.query('SELECT * FROM nobetciler',function(err,rows){
                    if(err){
                        console.log(err);
                        return next("Mysql error, check your query");
                    }
                    res.render("nobetciListesi.ejs", {nobetciler:rows});
                });
        });
    });


}