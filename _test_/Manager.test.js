// importing manager constructor 
const Manager = require('../lib/Manager');

// new manager object  
test('creates an Manager object', () => {
    const manager = new Manager('test', 0, 'test@gmail', 1);
    
    expect(manager.officeNum).toEqual(expect.any(Number));
});

// manager role
test('gets role of employee', () => {
    const manager = new Manager('test', 0, 'test@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 