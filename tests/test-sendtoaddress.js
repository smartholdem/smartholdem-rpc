const request = require('request');
const jsonReader = require('jsonfile');
const appConfig = jsonReader.readFileSync('../config.json'); // конфиг

request({
    method: 'post',
    json: true, // Use,If you are sending JSON data
    url: 'http://localhost:3000/api/sendtoaddress',
    body: {"address": "Sgx3VdXJyKGdNrtLP6J569zuWrevqA4qc1", "amount": 0.0005, "comment": null},
    headers: {
        "Content-Type": "application/json",
        "app-password": appConfig.app.password
    }
}, function (err, res, data) {
    console.log(data);
});
