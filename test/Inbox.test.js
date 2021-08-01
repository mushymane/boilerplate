const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); //network to connect to






// class Bit {
//     send() {
//         return 'sent';
//     }

//     receive() {
//         return 'moon';
//     }
// }

// let bit;
// beforeEach(() => {
//     bit = new Bit();
// });

// describe('Bit', () => {
//     it('can send', () => {
//         //const bit = new Bit(); //beforeEach
//         assert.equal(bit.send(), 'sent');
//     });

//     it('can receive', () => {
//         //const bit = new Bit();
//         assert.equal(bit.receive(), 'moon');
//     });
// });