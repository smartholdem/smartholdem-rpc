const request = require('request');
const jsonReader = require('jsonfile');
const appConfig = jsonReader.readFileSync('../config.json'); // конфиг

request({
    method: 'get',
    json: true, // Use,If you are sending JSON data
    url: appConfig.app.apiurl + '/getnewaddress',
    headers: {
        "Content-Type": "application/json",
        "app-Password": appConfig.app.password
    }
}, function (err, res, data) {
    console.log(data);
});
