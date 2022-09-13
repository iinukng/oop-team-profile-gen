// importing constructor 
const Employee = require('./Employee');

// extending manager constructor  
class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        // employee call
        super (name, id, email); 
        
        this.officeNum = officeNum; 
    }

    // // role change
    getRole () {
        return "Manager";
    }
}

// exports 
module.exports = Manager; 