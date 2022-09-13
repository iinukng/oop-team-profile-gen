// employee constructor 
class Employee {
  constructor (name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email 
  }

  // returning inputs
  getName () {
      return this.name;
  }

  getId () {
      return this.id;
  }   

  getEmail () {
      return this.email;
  }

  getRole () {
      return 'Employee'; 
  }
};

// exports
module.exports = Employee; 