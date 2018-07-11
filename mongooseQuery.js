var mongoose = require( 'mongoose' );
var User = require('./mongooseModel.js');

//  find all users
User.find( {}, ( err, users ) => {
    if ( err ) throw err;

    console.log( users );
});

//  find one user
User.find( { username: 'starlord65' }, ( err, user ) => {
    if ( err ) throw err;

    console.log( user );
})

//  findById
User.findById( 1, ( err, user ) => {
    if ( err ) throw err;

    console.log( user );
})

//  querrying ( get any admin that was created in the past month)
var monthAgo = new Date();
monthAgo.setMonth( monthAgi - getMonth() - 1);

User.find( { admin: true } ).where( 'created_at' ).gt ( monthAgo ).exec( ( err, users ) => {
    if ( err ) throw err;

    console.log( users );
});

// UPDATE

//  1. get the user with id 1
User.findById( 1, ( err, user ) => {
    if ( err ) throw err;

//  2. change the user location
user.location = 'uk';

//  3. save the user
user.save( err => {
    if ( err ) throw err;

    console.log( 'user was successfully updated' )
});

});

//  find user starlord65 and update it to starlord89
User.findOneAndUpdate( { username: 'starlord65' }, { username: 'starlord89' }, ( err, user ) => {
    if ( err ) throw err;

    console.log( user );
} );

//  find user by id and update
User.findByIdAndUpdate( 4, { username: 'starlord89' }, ( err, user ) => {
    if ( err ) throw err;

    console.log( user );
} )

//  DELETE
//  get a user, then delete
User.find( { username: 'starlord85' }, ( err, user ) => {
    if ( err ) throw err;
    
    //  delete
    user.remove( err => {
        if ( err ) throw err;

        console.log( 'user has been removed' );
    } );
} );

//  find and remove
User.findOneAndRemove( { username: 'strlord65' }, err => {
    if ( err ) throw err;

    console.log( 'user deleted' );
} )

//  find by id and remove
User.findByIdAndRemove( 1, err => {
    if ( err ) throw err;

    console.log( 'user deleted' );
});