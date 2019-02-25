const Koa = require('koa');
const app = new Koa();
const {openSync} = require('fs');

app.use(async function(ctx) {
    ctx.body = 'Hello World';
});
const API_PORT = process.env.API_PORT || 3000;
app.listen(API_PORT, () => {
    if (process.env.DYNO) {
        // on Heroku this tells nginx buildpack that app is ready to accept connections on PORT
        openSync('/tmp/app-initialized', 'w');
    }
});
