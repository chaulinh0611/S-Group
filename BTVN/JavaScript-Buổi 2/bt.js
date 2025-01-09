//Bai 1
let user = {}
user.name = "David"
user.surname = "Xuan"
user.name = "Cafedev"
delete user.name
// console.log("name", user.name)
// console.log("surname", user.surname)

//Bai 2
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
// let schedule = {};
// alert(isEmpty(schedule));
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule));

// let sv = {};
// console.log(isEmpty(sv));
// sv.name = "Linh"
// console.log(isEmpty(sv));

//Bai 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for(let key in salaries){
    sum+= salaries[key];
}
console.log(sum);

//Bai 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu cafedev"
};
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == "number"){
            obj[key] = obj[key]*2
        }
    }
}
multiplyNumeric(menu);
// for(key in menu){
//     console.log(key, menu[key]);
// }

//Bai 5
let computer = {
    val1: 0,
    val2: 0,
    read(){
        this.val1 = 100;
        this.val2 = 200;
    },
    sum() {
        return this.val1 + this.val2; 
    },
    mul() {
        return this.val1 * this.val2;
    }
}
// computer.read()
// console.log("sum", computer.sum())
// console.log("mul", computer.mul())

