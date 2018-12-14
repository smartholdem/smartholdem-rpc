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
```shell
mv sample.config.json config.json
nano config.json
```

```json
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

Note: fore more info see tests

# IMPORTANT NOTE

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
