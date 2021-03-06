'use strict';
angular.module('copayApp.services')
  .factory('bwsError', function bwcErrorService($log, gettextCatalog) {
    var root = {};
   
   root.msg = function(err, prefix) {
      var body = '';
      prefix = prefix || '';

      if  (err && err.code)  {
        switch(err.code) {
          case 'CONNECTION_ERROR':
            body = gettextCatalog.getString('Network connection error');
            break;
          case 'NOT_FOUND':
            body = gettextCatalog.getString('Wallet service not found');
            break;
          case 'BAD_SIGNATURES': 
            body = gettextCatalog.getString('Signatures rejected by server');
            break;
          case 'COPAYER_DATA_MISMATCH': 
            body = gettextCatalog.getString('Copayer data mismatch');
            break;
          case 'COPAYER_IN_WALLET': 
            body = gettextCatalog.getString('Copayer already in this wallet');
            break;
          case 'COPAYER_REGISTERED': 
            body = gettextCatalog.getString('Key already associated with an existing wallet');
            break;
          case 'COPAYER_VOTED': 
            body = gettextCatalog.getString('Copayer already voted on this spend proposal');
            break;
          case 'DUST_AMOUNT': 
            body = gettextCatalog.getString('Amount below dust threshold');
            break;
          case 'INCORRECT_ADDRESS_NETWORK': 
            body = gettextCatalog.getString('Incorrect address network');
            break;
          case 'INSUFFICIENT_FUNDS': 
            body = gettextCatalog.getString('Insufficient funds');
            break;
          case 'INSUFFICIENT_FUNDS_FOR_FEE': 
            body = gettextCatalog.getString('Insufficient funds for fee');
            break;
          case 'INVALID_ADDRESS': 
            body = gettextCatalog.getString('Invalid address');
            break;
          case 'LOCKED_FUNDS': 
            body = gettextCatalog.getString('Funds are locked by pending spend proposals');
            break;
          case 'NOT_AUTHORIZED': 
            body = gettextCatalog.getString('Not authorized');
            break;
          case 'TX_ALREADY_BROADCASTED': 
            body = gettextCatalog.getString('Transaction already broadcasted');
            break;
          case 'TX_CANNOT_CREATE': 
            body = gettextCatalog.getString('Locktime in effect. Please wait to create a new spend proposal');
            break;
          case 'TX_CANNOT_REMOVE': 
            body = gettextCatalog.getString('Locktime in effect. Please wait to remove this spend proposal');
            break;
          case 'TX_NOT_ACCEPTED': 
            body = gettextCatalog.getString('Spend proposal is not accepted');
            break;
          case 'TX_NOT_FOUND': 
            body = gettextCatalog.getString('Spend proposal not found');
            break;
          case 'TX_NOT_PENDING': 
            body = gettextCatalog.getString('The spend proposal is not pending');
            break;
          case 'UPGRADE_NEEDED': 
            body = gettextCatalog.getString('Please upgrade Copay to perform this action');
            break;
          case 'WALLET_ALREADY_EXISTS': 
            body = gettextCatalog.getString('Wallet already exists');
            break;
          case 'WALLET_FULL': 
            body = gettextCatalog.getString('Wallet is full');
            break;
          case 'WALLET_NOT_COMPLETE': 
            body = gettextCatalog.getString('Wallet is not complete');
            break;
          case 'WALLET_NOT_FOUND': 
            body = gettextCatalog.getString('Wallet not found');
            break;
          case 'SERVER_COMPROMISED': 
            body = gettextCatalog.getString('Server response could not be verified');
            break;
          case 'WALLET_DOES_NOT_EXIST': 
            body = gettextCatalog.getString('Wallet not registed at the Wallet Service. Recreate it from "Create Wallet" using "Advanced Options" to set your seed');
            break;
          case 'INVALID_BACKUP': 
            body = gettextCatalog.getString('Wallet seed is invalid');
            break;
          case 'MAIN_ADDRESS_GAP_REACHED':
            body = gettextCatalog.getString('Empty addresses limit reached. New addresses cannot be generated.');
            break;
  
          case 'ERROR':
            body = (err.message || err.error);
            break;

          default:
            $log.warn('Unknown error type:', err.code);
            body =  err.message  || err.code;
            break;
        }
      } else if (err.message) {
        body = gettextCatalog.getString(err.message);
      } else {
        body = gettextCatalog.getString(err);
      }

      var msg = prefix + ( body ? (prefix ? ': ' : '') + body  : '');
      return msg;
    };

    root.cb = function (err,prefix, cb) {
      return cb(root.msg(err, prefix))
    };

    return root;
  });
