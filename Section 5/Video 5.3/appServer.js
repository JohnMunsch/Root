// Needless to say, this is not how I recommend you write Node.js servers. I wrote this one this way to avoid installing
// any NPM packages for this app. The emphasis of this course is upon Angular 2, not Node.js development.
//
// If you decide you want to do some Node.js development I recommend you learn how to use Express to do this same thing.
// It's much easier.
'use strict';
const http = require('http');
const url = require('url');
const querystring = require('querystring');

let v1Accounts = [
  {
    id: 1,
    name: 'Ambient Energy',
    balance: 15233553,
    token: 'OF7Z9RJBIV'
  },
  {
    id: 2,
    name: 'Lessig Power and Light',
    balance: 1295811,
    token: 'J1GU3BI9VW'
  }
];

let v2Accounts = [
  {
    id: 1,
    name: 'Ambient Energy',
    balance: 15233553,
    token: 'OF7Z9RJBIV'
  },
  {
    id: 2,
    name: 'Lessig Power and Light',
    balance: 1295811,
    token: 'J1GU3BI9VW'
  }
];

let port = 2352;

http.createServer(function (req, res) {
  // Without this we aren't going to be able to call from a server running on port 3000
  // to one running on this port. They're considered to be different servers and thus
  // your browser will try to protect you from harmful code.
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Identify four different API endpoints.
  let method = req.method;
  let parsedUrl = url.parse(req.url);
  let params = querystring.parse(parsedUrl.query);

  if (parsedUrl.path.startsWith('/api/v1/account/')) {
    console.log('V1 API');

    let accountNumber = getAccountNumber(parsedUrl.path);

    // Is this a valid account number?
    if (!validAccountNumber(v1Accounts, accountNumber)) {
      console.log('Invalid Account Number');

      // Attempting to access an unknown or deleted account.
      fail(res);
      return;
    }

    // Two version one.
    if (req.method === 'GET') {
      // Find the account, return the data: GET /api/v1/account/:id
      let data = getAccount(v1Accounts, accountNumber);
      success(res, data);
    } else if (req.method === 'DELETE') {
      // Delete the account: DELETE /api/v1/account/:id
      v1Accounts = deleteAccount(v1Accounts, accountNumber);
      success(res, {});
    } else {
      // Unknown API call.
      fail(res);
    }
  } else if (parsedUrl.path.startsWith('/api/v2/account/')) {
    console.log('V2 API');

    let accountNumber = getAccountNumber(parsedUrl.path);

    // Is this a valid account number?
    if (!validAccountNumber(v2Accounts, accountNumber)) {
      // Attempting to access an unknown or deleted account.
      fail(res);
      return;
    }

    // Does this user own the account in question?
    let userOwnsAccount = validAccountOwner(v2Accounts, accountNumber, params.token);

    // And two version two.
    if (req.method === 'GET') {
      // Find the account, return the data (full if it's your account, limited otherwise): GET /api/v2/account/:id
      if (userOwnsAccount) {
        // Return the full account data.
        let data = getAccount(v2Accounts, accountNumber, false);
        success(res, data);
      } else {
        // You don't own the account you're trying to access. You get a name and nothing else.
        let data = getAccount(v2Accounts, accountNumber, true);
        success(res, data);
      }
    } else if (req.method === 'DELETE') {
      // Delete the account (if it's your account, otherwise 401 Unauthorized): DELETE /api/v1/account/:id
      if (userOwnsAccount) {
        v2Accounts = deleteAccount(v2Accounts, accountNumber);
        success(res, {});
      } else {
        // You don't own the account you're trying to delete.
        unauthorized(res);
      }
    } else {
      // Unknown API call.
      fail(res);
    }
  } else {
    // Unknown API call.
    fail(res);
  }
}).listen(2352);

function getAccountNumber(path) {
  let accountNumberRegex = /\/api\/(?:v1|v2)\/account\/(\d+)/;

  let matches = path.match(accountNumberRegex);

  if (matches && matches.length > 1) {
    return parseInt(matches[1], 10);
  }
}

function findRawAccountData(data, accountNumber) {
  return data.find(value => value.id === accountNumber);
}

function validAccountNumber(data, accountNumber) {
  let accountData = findRawAccountData(data, accountNumber);

  return accountData ? true : false;
}

function validAccountOwner(data, accountNumber, token) {
  let accountData = findRawAccountData(data, accountNumber);

  console.log(accountData, token);
  return accountData.token === token;
}

function getAccount(data, accountNumber, limited) {
  let accountData = findRawAccountData(data, accountNumber);
  let retVal = Object.assign({}, accountData);

  if (!accountData) {
    return retVal;
  }

  if (limited) {
    delete retVal.balance;
  }

  delete retVal.token;

  return retVal;
}

function deleteAccount(data, accountNumber) {
  // Keep all of the accounts except the one to throw away.
  return data.filter(value => value.id !== accountNumber);
}

function success(res, data) {
  console.log('Success');

  // Return the data with a JSend wrapper.
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    status: 'success',
    data
  }));
}

function unauthorized(res) {
  console.log('Unauthorized');

  // Return an unauthorized error.
  res.statusCode = 401;
  res.end();
}

function fail(res) {
  console.log('Fail');

  // Return a JSend failure.
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    status: 'fail',
    data: {
    }
  }));
}

console.log(`Server listening on port ${port}`);
