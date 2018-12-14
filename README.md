# SmartHoldem RPC Daemon

Designed to remotely manage your STH assets through RPC API as in bitcoin

development process..


## Installation
```
git clone https://github.com/smartholdem/smartholdem-rpc.git
cd smartholdem-rpc
npm install
```

## How to use

1. rename sample.config.json in config.json and edit settings
```shell
mv sample.config.json config.json
nano config.json
```

```js
{
  "app": {
    "port": 3000, // app port for rpc connections
    "localhostOnly": true, // use local rpc access only
    "password": "here password app" // app password for access to the rpc
  },
  "smartholdem":{
    "preferredNode": "127.0.0.1", // SmartHodlem node ip
    "network": "main",
    "masterAccount": {
      "password": "your master address passphrase 12 words here" // wallet address passphrase
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

#### getnewaddress

Returns a new SmartHoldem address for receiving payments.

```shell
curl -k -X GET "http://localhost:3000/api/getnewaddress"
-H "accept: application/json"
-H "app-password: 12345678"
```

json result:

```json
{
  "pass": "caught reform outer advice cross day voice manual brisk robot outer broken",
  "pubKey": "02d902591e96dc0f13bbe6b443e9968dbdcc5c6b64b7af957051aff4de4c43c99f",
  "addr": "SNKebca3nSrkfQwPpatkPS6QbfozTk7gZd"
}
```

#### sendtoaddress <address recipient> <amount> [comment]

Send STH from master address

```
curl -X POST
-H "Content-Type: application/json" -H "app-password: 12345678"
-d '{"address":"SeZLuyhhYf2qxs4ArPJ71oEu3x8EsVw51C","amount":12.01,"comment":"hello"}'
http://localhost:3000/api/sendtoaddress
```

#### sendfrom <senderpassword> <address recipient> <amount> [comment]

Send from to

```
curl -k -H "Content-Type: application/json" -H "app-password: 12345678" -X POST
-d '{"senderpassword": "passphrase 12 words","address":"SeZLuyhhYf2qxs4ArPJ71oEu3x8EsVw51C","amount":12.01,"comment":"hello"}'
http://localhost:3000/api/sendtoaddress
```

#### sendmany recipients:{address:amount,...} [comment]

Send to several addresses from master address

```
curl -k -H "Content-Type: application/json" -H "app-password: 12345678" -X POST
-d '{"recipients":{"SeZLuyhhYf2qxs4ArPJ71oEu3x8EsVw51C":12.01, "Scky5gWBLDuA82KmBrkvF4XGirBkTD4Kbe":1.25},"comment":"hello"}'
http://localhost:3000/api/sendmany
```

json result:

```
{ success: true,
  transactionIds:
   [ 'd5cf571adfb262f8c894b227bb469a8c3a9d90faf5df60060b591b8aa49f3335',
     '4e25493c13a1b2df64760436dd68c864cefa0accae0b3814d4e2e41a60521936',
     '63e1ef2cfa0bba71245dafc15b3e81d7b1e57969230286c08342b6384e85bc4c' ]
     }
```

Note: fore more info see tests

# IMPORTANT NOTE

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
