// importing constructor 
const Employee = require('./Employee');

// extending intern constructors 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // employee call
        super (name, id, email); 

        this.school = school; 
    }

    // returning inputs 
    getSchool () {
        return this.school;
    }

    // role change
    getRole () {
        return "Intern";
    }
}

// exports
module.exports = Intern; 