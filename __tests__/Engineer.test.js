const Engineer = require("Team-Profile-Generator/lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "JoshDunn";
    const employeeInstance = new Engineer("Josh", 2, "joshdunn887@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JoshDunn";
    const employeeInstance = new Engineer("Josh", 2, "joshdunn887@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Josh", 2, "joshdunn887@gmail.com", "JoshDunn");
    expect(employeeInstance.getRole()).toBe(returnValue);
});