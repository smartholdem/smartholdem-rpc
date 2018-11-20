const request = require('request');
const jsonReader = require('jsonfile');
const appConfig = jsonReader.readFileSync('../config.json'); // конфиг


request({
    method: 'post',
    json: true, // Use,If you are sending JSON data
    url: appConfig.app.apiurl + '/sendtoaddress',
    body: {"address": "SeZLuyhhYf2qxs4ArPJ71oEu3x8EsVw51C", "amount": 0.0005, "comment": "test rpc comment"},
    headers: {
        "Content-Type": "application/json",
        "app-Password": appConfig.app.password
    }
}, function (err, res, data) {
    console.log(data);
});
