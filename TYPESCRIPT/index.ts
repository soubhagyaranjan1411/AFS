interface User{
    username:string;
    age:number;
}
let user: User = {
    username: "Soubhagya",
    age: 23
};
console.log(user.username)
user.age=45;

let num:number[]=[1,2,3,4,5];

num[3]=45;

let str: string[] = ["soubhagya", "ranjan", "jena"];

let numstr:number[] | string[] = [];
numstr[0]=1;
numstr[1]="10"
//console.log(numstr[4]);

interface Emp{
    id:number,
    ename:string,
    salary:number,
    dep:string,
getName(): string;
}

let emp:Emp={
    id:1,
    ename:"Soubhagya",
    salary:100000,
    dep:"IT",
    getName():string{
        return this.ename;
    }
}