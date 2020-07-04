var nameVar = 'Bug';
var nameVar = 'Exploit'
console.log('nameVar', nameVar);

let nameLet = 'Briaku';
nameLet = 'Knight';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Graham Francisco';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);