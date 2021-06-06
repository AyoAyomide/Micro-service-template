function isEmptyString(str) {
    return (!str || /^\s*$/.test(str));
}
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true
}
export { isEmptyString, isJson }