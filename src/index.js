const app = require( './app' );
app.listen( app.get( 'port' ) );
console.log( 'server listening!!', app.get( 'port' ) );