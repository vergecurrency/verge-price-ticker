## VERGE Price listings

##### Motivation:

_A webservice that fetches the current price levels for verge and serves them via the api to reduce request rates on the original services and raises the privacy and security for our users by not requiring them to access a 3rd parties api._

## Requirements

- latest Mongo DB running to cache price levels
- yarn / NPM (comes with NodeJS)
- NodeJS (>= 8.x.x)
- and an ethernet connection lol ;)

## How to start

1. Run yarn / npm to install all required modules
2. you can either choose to run the prod or dev mode!
   1. Production: `yarn run prod`
   2. Development: `yarn run dev`
3. Then you will be able to access the service via `localhost:3000/api/v1/price/:currency`

## Production hosting

The server isn't optimized for production so we have to get some messaurements to do:

- Missing GZIP when sending responses
- No HTTPS
- Caching is partially suppported
- Multi Request handling isn't supported
- Sharding isn't supported

That's why we have to wrap this services with an **NGINX server** to proxy those request to this backend service. Meanwhile this services is running as sharding service within **PM2**.
