let SToken = ({ length = 8, chars = true, numbers = true, exclude = [] } = { length: 50 }) => {

    if (!chars && !numbers && !symbols) throw new SyntaxError('Error')
    let resultChars = ''
    if (chars) resultChars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbers) resultChars += '0123456789'

    let aux = resultChars.split('').filter(item => !exclude.includes(item))
    resultChars = aux.join('')

    let token = '';
    for (let i = 0; i < length; i++) {
        token += resultChars[Math.floor(Math.random() * resultChars.length)];
    }
    return token;
}

module.exports = SToken