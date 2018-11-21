# SmartHoldem RPC Daemon

Designed to remotely manage your assets through RPC API as in bitcoin

development process..


## Installation
```
git clone https://github.com/smartholdem/smartholdem-rpc.git
cd smartholdem-rpc
npm install
```

## How to use

1. rename sample.config.json in config.json and edit settings
```json
{
  "app": {
    "port": 3000,
    "password": "here password app",
    "apiurl": "http://localhost:3000/api"
  },
  "smartholdem":{
    "preferredNode": "Your SmartHoldem Node ip",
    "network": "main",
    "masterAccount": {
      "password": "your master address passphrase 12 words here"
    }
  }
}
```

2. run app
```
forever start bin/www
```

### API

default app port: 3000

- getnewaddress

Returns a new SmartHoldem address for receiving payments.

```shell
curl -k -X GET "http://localhost:3000/api/getnewaddress"
-H "accept: application/json"
-H "app-Password: 12345678"
```

json result:

```json
{
  "pass": "caught reform outer advice cross day voice manual brisk robot outer broken",
  "pubKey": "02d902591e96dc0f13bbe6b443e9968dbdcc5c6b64b7af957051aff4de4c43c99f",
  "addr": "SNKebca3nSrkfQwPpatkPS6QbfozTk7gZd"
}
```

- sendtoaddress <smartholdemaddress> <amount> [comment]

Send STH from master address

- sendfrom



Note: fore more info see examples
