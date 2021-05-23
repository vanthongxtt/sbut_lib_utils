const checkEmailAddress = (email) => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEmail.test(email);
}
const checkPhoneNumber = (phone) => {
    const regPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    return regPhone.test(phone);
}
const isEmpty = (text) => {
    return text ? false : true;
}
const isJsonString =  (str) =>{
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
module.exports = { checkEmailAddress, checkPhoneNumber, isEmpty, isJsonString };