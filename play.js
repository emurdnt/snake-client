const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');
let conn = connect();
setupInput(conn);
// host: '135.23.222.131',
// port:  50541