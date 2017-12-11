(function () {
    var bodyParser = require('body-parser');

    module.exports.loginController=function (req,res) {
        try{
            console.log(req.body);
            res.sendStatus(200);
        }
        catch(err)
        {
            console.log(err);
            res.sendStatus(404);
        }
    }

})();