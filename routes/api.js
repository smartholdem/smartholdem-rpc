var express = require('express');
var router = express.Router();
const smartholdemApi = require("sthjs-wrapper");
const sth = require("sthjs");
const bip39 = require("bip39");
const jsonReader = require('jsonfile');
const appConfig = jsonReader.readFileSync('./config.json'); // конфиг

/* GET home page. */
router.get('/getnewaddress', function(req, res, next) {
    let MNEMONIC = bip39.generateMnemonic();
    let PUB_KEY = sth.crypto.getKeys(MNEMONIC).publicKey;
    let ADDR = sth.crypto.getAddress(PUB_KEY);

    let privateData = {
        "pass": MNEMONIC,
        "pubKey": PUB_KEY,
        "addr": ADDR
    };

    res.json(privateData);
});


router.post('/sendtoaddress', function(req, res, next) {
    console.log(req.headers);
    if (appConfig.app.password === req.headers['app-password']) {
        res.json({"success": true, "result": req.headers});
    } else {
        res.json({"err": true, "code": 1, "comment": "authorize fail"})
    }
});



module.exports = router;
