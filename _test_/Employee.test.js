// importing employee constructor 
const Employee = require('../lib/Employee');

// employee object
test('new employee object', () => {
    const employee = new Employee('testname', 0, 'test@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// new employee name
test('employee name', () => {
    const employee = new Employee('testname', 0, 'test@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// new employee id
test('employee ID', () => {
    const employee = new Employee('testname', 0, 'test@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// new employee email
test('employee email', () => {
    const employee = new Employee('testname', 0, 'test@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// new employee role
test('employee role', () => {
    const employee = new Employee('testname', 0, 'test@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 