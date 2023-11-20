// Ask  first name
const first_name = prompt ('name');

// Ask Last Name
const last_name = prompt ('surname');

// Ask favororite color
const favorite_color = prompt ('type your favorite color');

// Create password add numember 23

const password = first_name + last_name + favorite_color + '23';

console.log(first_name, last_name, favorite_color, 23);

document.getElementById('password').innerHTML = password;

