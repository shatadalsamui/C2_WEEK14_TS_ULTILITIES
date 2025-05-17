"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "shatadal", age: 21 }, { name: "shatada", age: 22 });
console.log(age);
