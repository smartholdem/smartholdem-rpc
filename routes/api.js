var express = require('express');
var router = express.Router();
const smartholdemApi = require("sthjs-wrapper");
const sth = require("sthjs");
const bip39 = require("bip39");
const jsonReader = require('jsonfile');
const appConfig = jsonReader.readFileSync('./config.json'); // конфиг

smartholdemApi.setPreferredNode(appConfig.smartholdem.preferredNode); // default node
smartholdemApi.init(appConfig.smartholdem.network); //main or dev

/* GET home page. */
router.get('/getnewaddress', function (req, res, next) {
    if (appConfig.app.password === req.headers['app-password']) {
        let MNEMONIC = bip39.generateMnemonic();
        let PUB_KEY = sth.crypto.getKeys(MNEMONIC).publicKey;
        let ADDR = sth.crypto.getAddress(PUB_KEY);

        let privateData = {
            "pass": MNEMONIC,
            "pubKey": PUB_KEY,
            "addr": ADDR
        };

        res.json(privateData);
    } else {
        res.json({"err": true, "code": 1, "comment": "authorize fail"});
    }
});


router.post('/sendtoaddress', function (req, res, next) {
    // console.log(req.headers);
    if (appConfig.app.password === req.headers['app-password']) {
        let vendorField = null;

        if (req.body.comment) {
            vendorField = req.body.comment;
        }

        let transaction = smartholdemApi.createTransaction(
            appConfig.smartholdem.masterAccount.password,
            req.body.address,
            req.body.amount * 10 * 8,
            {"vendorField": vendorField}
        );

        // console.log(transaction);

        smartholdemApi.sendTransactions([transaction], (error, success, responseSend) => {
            console.log(responseSend);
            if (responseSend.success === true) {
                res.json(responseSend);
            } else {
                res.json({"err": true, "code": 2, "comment": "err send tx"});
            }
        });


    } else {
        res.json({"err": true, "code": 1, "comment": "authorize fail"});
    }
});



router.post('/sendfrom', function (req, res, next) {
    // console.log(req.headers);
    if (appConfig.app.password === req.headers['app-password']) {
        let vendorField = null;

        if (req.body.comment) {
            vendorField = req.body.comment;
        }

        let transaction = smartholdemApi.createTransaction(
            req.body.senderpassword,
            req.body.address,
            req.body.amount * 10 * 8,
            {"vendorField": vendorField}
        );

        // console.log(transaction);

        smartholdemApi.sendTransactions([transaction], (error, success, responseSend) => {
            // console.log(responseSend);
            if (responseSend.success === true) {
                res.json(responseSend);
            } else {
                res.json({"err": true, "code": 2, "comment": "err send tx"});
            }
        });


    } else {
        res.json({"err": true, "code": 1, "comment": "authorize fail"});
    }
});

module.exports = router;
