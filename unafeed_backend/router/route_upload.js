var router = require('express').Router()
var bodyParser = require('body-parser')
var cors = require('cors')
var upload = require('express-fileupload')

router.use(bodyParser.json())
router.use(cors())
router.use(upload())

router.post("/file", function(req,res){
    // console.log(req)
    if(req.files){
        console.log(req.files)
        var file = req.files.filename;
        var filename = file.name;
        file.mv("./file/" + filename, (err) => {
            if(err){
                console.log(err);
                res.send({status: 'no'});
            }
            else{
                res.send({
                    status: 'ok',
                    fotoTerupload: `http://localhost:1234/file/${filename}`
                });
            }
        })
    } else {
        console.log(req.files)
        res.send({status: 'no'})
    }
})

module.exports = router