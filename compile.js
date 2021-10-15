// buit in standard module - don't need npm install
// Path - for cross web browser
// fs - file system
const path = require('path');
const fs = require('fs');

const solc = require('solc');

// dirname - current working directory = inbox
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');
// 1 - number of diffrent contracts that we are attempting to compile

module.exports = solc.compile(source, 1).contracts[':Inbox'];