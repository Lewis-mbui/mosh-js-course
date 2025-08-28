// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

// console.log(1 | 2);
// console.log(1 & 2);

// 0 0 0 0 0 Read Write Execute
// 00000100 --> Read
// 00000110 --> Read & Write
// 00000111 --> Read, Write and Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log('Read Permission:', message);