var nameVar = "Tony";
var nameVar = "Anthony";

// you can redefine a varible with Var

console.log(`nameVar ${nameVar}`);

// *************************************************************************************



let nameLet = "Angela";
nameLet = "lilly";
// !! let nameLet = "lilly"; // cannot redefine variables with let or const
console.log(`nameLet ${nameLet}`);

const nameConst = "Nugget";
console.log(`nameConst ${nameConst}`);


// Block scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);