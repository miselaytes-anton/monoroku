# Monoroku

Monorepo for Heroku. Allows to deploy NodeJS server and client in a single Heroku dyno.

Sample apps use React and Koa.

## Requirements

- add `API_PORT` env variable and make sure server listens on this port.
- ensure client build files are in `client/build`
- add required buildpacks (see `.buildpacks`) to your Heroku app
- create an empty `/tmp/app-initialized` file after server has started, see [server/index.js](https://github.com/miselaytes-anton/monoroku/blob/a29ed4242cb6209de82dad61f3a6a220a584eef9/server/index.js#L12)

## Setup

- NGINX proxies requests to `/api/` to node server listening on `PORT`
- NGINX serves static files from `client/build`
- see `config/nginx.conf.erb` for details

