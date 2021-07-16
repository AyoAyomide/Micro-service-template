import Validator from "validatorjs";

class Validation {
    constructor() {
        this.rules
        this.message = {}
    }
    setRules(rules) {
        this.rules = rules
    }
    validate(data) {
        let input = new Validator(data, this.rules)
        if (input.passes()) {
            this.setMessage('code', 200)
            this.setMessage('success', true)
            return true
        } else {
            this.setMessage('code', 400)
            this.setMessage('message', 'Invalid request body')
            this.setMessage('errors', input.errors.errors)
            this.setMessage('success', false)
            return false
        }
    }
    setMessage(key, value) {
        this.message[key] = value
    }
}
export default Validation