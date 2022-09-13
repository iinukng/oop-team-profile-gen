// importing constructor 
const Employee = require("./Employee");

// extending engineer constructors
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // employee call
        super (name, id, email);
        this.github = github; 
    }

    // returning inputs 
    getGithub () {
        return this.github;
    }

    // role change
    getRole () {
        return "Engineer";
    }
}

// exports
module.exports = Engineer; 