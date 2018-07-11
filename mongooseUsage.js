var User = require('./mongooseModel.js');

var chris = new User( {
    name: 'Chris',
    username: 'Sevilayha',
    password: 'password'
} )

chris.dudify( ( err, name) => {
    if ( err ) throw err;

    console.log( 'Your new name is ' + name );
} )

chris.save( ( err ) => {
    if ( err ) throw err;

    console.log( 'User created' );
} )

var newUser = new User( { 
    name: 'Peter Quill',
    username: 'starlord65',
    password: 'password',
    admin: true
 } )

 newUser.save( ( err ) => {
     if ( err ) throw err;

     console.log( 'User created' );
 } )

// save to db
chris.save( ( err ) => {
    if ( err ) throw err;

    console.log( 'User saved to the database' );
} )



