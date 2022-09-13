// importing engineer constructor 
const Engineer = require('../lib/Engineer');

// new engineer object  
test('new engineer object', () => {
    const engineer = new Engineer('testname', 90, 'test@gmail', 'testpage');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// engineer github
test('engineer github', () => {
    const engineer = new Engineer('testname', 90, 'test@gmail', 'testpage');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// engineer role
test('gets role of employee', () => {
    const engineer = new Engineer('testname', 90, 'test@gmail', 'testpage');

    expect(engineer.getRole()).toEqual("Engineer");
});