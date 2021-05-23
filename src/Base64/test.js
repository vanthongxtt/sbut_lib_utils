var {Base64} = require('./Base64');

const encode = Base64.encode('Hello SBut Platform') // "Hello SBut Platform" -> SGVsbG8gU0J1dCBQbGF0Zm9ybQ==
console.log('encode-> ', encode);

const decode = Base64.decode('SGVsbG8gU0J1dCBQbGF0Zm9ybQ==') // SGVsbG8gU0J1dCBQbGF0Zm9ybQ== -> Hello SBut Platform
console.log('decode-> ', decode);