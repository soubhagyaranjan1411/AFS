var user = {
    username: "Soubhagya",
    age: 23
};
console.log(user.username);
user.age = 45;
var num = [1, 2, 3, 4, 5];
num[3] = 45;
var str = ["soubhagya", "ranjan", "jena"];
var numstr = [];
numstr[0] = 1;
numstr[1] = "10";
var emp = {
    id: 1,
    ename: "Soubhagya",
    salary: 100000,
    dep: "IT",
    getName: function () {
        return this.ename;
    }
};
