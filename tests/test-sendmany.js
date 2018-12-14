const request = require('request');
const jsonReader = require('jsonfile');
const appConfig = jsonReader.readFileSync('./config.json'); // конфиг

request({
    method: 'post',
    json: true, // Use,If you are sending JSON data
    url: 'http://localhost:3000/api/sendmany',
    body: {
        "comment": "sendmany",
        "recipients": {
            "Sgx3VdXJyKGdNrtLP6J569zuWrevqA4qc1": 0.005,
            "Sgy59prTfgkGVjVWGAx5ehwiihRNZzwQQj": 0.002,
            "Scky5gWBLDuA82KmBrkvF4XGirBkTD4Kbe": 0.006,
        }
    },
    headers: {
        "Content-Type": "application/json",
        "app-password": appConfig.app.password
    }
}, function (err, res, data) {
    console.log(data);
});
