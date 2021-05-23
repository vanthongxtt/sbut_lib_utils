var {checkEmailAddress, checkPhoneNumber, isEmpty, isJsonString} = require('./');

const checkEmail = checkEmailAddress('vanthongxtt@gmail.com'); // true
console.log(checkEmail); 

const checkPhone = checkPhoneNumber('0393169324'); // true
console.log(checkPhone);

const t = isEmpty('sbut'); // false
console.log(t);


const JSON_TEST = [
    {
        id: '1',
        icon: 'power-off',
    },
    {
        id: '2',
        icon: 'lightbulb',
    }
]

const isJson = isJsonString(JSON.stringify(JSON_TEST)); // true
console.log(isJson);