var express = require( 'express' );
var logger = require( 'morgan' );
var bodyParser = require( 'body-parser' );
var api = require( './api.js' );
var conf = require( '../config.js' );

var app = express();

app.use( logger( 'dev' ) );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
    extended: false
} ) );

app.get( '/', function( req, res ) {
    res.end( 'fe mock data' );
} );

app.use( '/api', api );

// catch 404 and forward to error handler
app.use( function( req, res, next ) {
    var err = new Error( 'Not Found' );
    err.status = 404;
    next( err );
} );

app.listen( conf.dev.mockPort, function( err ) {
    if ( err ) {
        console.log( err );
    }
    console.log( 'Listening at http://localhost:' + conf.dev.mockPort + '\n' );
} );
