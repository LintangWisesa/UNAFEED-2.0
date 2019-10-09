var router = require('express').Router()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var cors = require('cors')

router.use(bodyParser.json())
router.use(cors())

var db = mysql.createConnection({
    host: 'localhost',
    user: 'lintang',
    password: '12345',
    database: 'unafeed'
})

db.connect(()=>{
    console.log('Database terhubung!')
})

// GET all user
router.get('/user', (req, res) => {
    var dbStat = 'select * from unafeed_users'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET user by id
router.get('/user/:uid', (req, res) => {
    var dbStat = 'select * from unafeed_users where uid = ?'
    db.query(dbStat, req.params.uid, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// get all unastore's products
router.get('/product', (req, res) => {
    var dbStat = 'select * from unastore'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// get unastore's product by product id
router.get('/product/:uid', (req, res) => {
    var dbStat = 'select * from unastore where pid = ?'
    db.query(dbStat, req.params.uid, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// post cart
router.post('/cart', (req, res) => {
    var dbStat = 'insert into cart values (?,?,?)'
    cpid = req.body.cpid
    cuid = req.body.cuid
    cjumlah = req.body.cjumlah
    db.query(dbStat, [cpid, cuid, cjumlah], (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send({
                status: 'ok',
                cpid: req.body.cpid,
                cuid: req.body.cuid,
                cjumlah: req.body.cjumlah
            })
        }
    })
})

// get all carts
// select * from
// cart c, unafeed_users u, unastore p
// where c.cuid = u.uid and c.cpid = p.pid;
router.get('/cart', (req, res) => {
    var dbStat = 'select * from cart c, unafeed_users u, unastore p where c.cuid = u.uid and c.cpid = p.pid'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// get cart by user id
// select * from
// cart c, unafeed_users u, unastore p
// where c.cuid = u.uid and c.cpid = p.pid and u.uid = 1;
router.get('/cart/:uid', (req, res) => {
    var dbStat = 'select * from cart c, unafeed_users u, unastore p where c.cuid = u.uid and c.cpid = p.pid and u.uid = ?'
    db.query(dbStat, req.params.uid, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// signup
router.post('/signup', (req, res)=>{
    var dbStat = 'insert into unafeed_users set ?'
    var data = {
        unama: req.body.unama,
        uemail: req.body.uemail,
        upassword: req.body.upassword,
    }
    db.query(dbStat, data, (error, output) => {
        if(error){
            console.log(error)
            res.send({
                status: 'no'
            })
        } else {
            console.log(output)
            res.send({
                unama: req.body.unama,
                uemail: req.body.uemail,
                upassword: req.body.upassword,
                status: 'ok' 
            })
        }
    })
})

// login
router.post('/login', (req, res)=>{
    var dbStat = 'select * from unafeed_users where uemail = ? and upassword = ?'
    var uemail = req.body.uemail
    var upassword = req.body.upassword
    db.query(dbStat, [uemail, upassword], (error, output) => {
        if(error){
            console.log(error)
            res.send({
                statusLogin: 'no'
            })
        } else {
            console.log(output)
            if (output.length <= 0 || output.length > 1){
                res.send({
                    statusLogin: 'no' 
                })
            } else {
                res.send({
                    user: output[0],
                    statusLogin: 'ok' 
                })
            }
        }
    })
})

// update data user
router.put('/update', (req, res)=>{
    var dbStat = 'update unafeed_users set ufoto = ?, ualamat = ?, ukabkota = ?, utelp = ? where uid = ?'
    // var unama = req.body.unama
    // var uemail = req.body.uemail
    var ufoto = req.body.ufoto
    var ualamat = req.body.ualamat
    var ukabkota = req.body.ukabkota
    var utelp = req.body.utelp
    var uid = req.body.uid
    db.query(dbStat, [ufoto, ualamat, ukabkota, utelp, uid], (error, output) => {
        if(error){
            console.log(error)
            res.send({
                statusUpdate: 'no'
            })
        } else {
            console.log(output)
            res.send({
                statusUpdate: 'ok' 
            })
        }
    })
})

// =============================================

// post iot data unasense
router.post('/iot', (req, res) => {
    var dbStat = 'insert into unasense (iid, isuhuu, isuhua, ilembab, ipressu, ialti, itangki) values (?,?,?,?,?,?,?)'
    iid = req.body.iid
    isuhuu = req.body.isuhuu
    isuhua = req.body.isuhua
    ilembab = req.body.ilembab
    ipressu = req.body.ipressu
    ialti = req.body.ialti
    itangki = req.body.itangki
    db.query(dbStat, [iid, isuhuu, isuhua, ilembab, ipressu, ialti, itangki], (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send({
                status: 'ok',
                iid: req.body.iid,
                isuhuu: req.body.isuhuu,
                isuhua: req.body.isuhua,
                ilembab: req.body.ilembab,
                ipressu: req.body.ipressu,
                ialti: req.body.ialti,
                itangki: req.body.itangki,
            })
        }
    })
})

// get iot data (unasense) by id alat iid
router.get('/iot/:iid', (req, res) => {
    var dbStat = 'select * from unasense where iid = ?'
    db.query(dbStat, req.params.iid, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

module.exports = router