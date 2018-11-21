const request = require('request');
const jsonReader = require('jsonfile');
const appConfig = jsonReader.readFileSync('../config.json'); // конфиг


request({
    method: 'post',
    json: true, // Use,If you are sending JSON data
    url: appConfig.app.apiurl + '/sendtoaddress',
    body: {"address": "Sgx3VdXJyKGdNrtLP6J569zuWrevqA4qc1", "amount": 0.0005, "comment": "tst with php rpc requests"},
    headers: {
        "Content-Type": "application/json",
        "app-password": appConfig.app.password
    }
}, function (err, res, data) {
    console.log(data);
});
