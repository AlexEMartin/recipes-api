const jwt = require('jsonwebtoken');

const generateJWT = ( id = '' ) => {

    return new Promise((resolve, reject ) => {

        const payload = { id };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, (err, token) => {

            if ( err ) {
                console.log(err);
                reject('Cannot generate JWT token');
            } else {
                resolve( token );
            }

        })

    })


}


module.exports = {
    generateJWT
}