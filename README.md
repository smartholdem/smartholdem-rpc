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

2. run
```
forever start bin/www
```

### API

default app port: 3000

- getnewaddress

Returns a new SmartHoldem address for receiving payments.

```
GET http://localhost:3000/api/getnewaddress
```

params:



- sendtoaddress

- sendfrom

