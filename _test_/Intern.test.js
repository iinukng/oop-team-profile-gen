// importing intern constructor 
const Intern = require('../lib/Intern');

// new intern object  
test('new intern object', () => {
    const intern = new Intern('testname', 90, 'test@gmail', 'schoolfiller');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// retrieves school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('testname', 90, 'test@gmail', 'schoolfiller');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// intern role
test('gets role of employee', () => {
    const intern = new Intern('testname', 90, 'test@gmail.com', 'schoolfiller');

    expect(intern.getRole()).toEqual("Intern");
}); 