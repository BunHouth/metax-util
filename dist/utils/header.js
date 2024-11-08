"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeader = void 0;
var _signature = require("./signature");
var createHeader = exports.createHeader = function createHeader(params, apiKey, privateKey) {
  var RECV = String(5000);
  var TIMESTAMP = Date.now().toString();
  var signData = TIMESTAMP + apiKey + RECV;
  var signature = (0, _signature.sign)(signData, params, privateKey);
  console.log({
    signature: signature
  });
  var headers = {
    'X-SAASAPI-API-KEY': apiKey,
    'X-SAASAPI-TIMESTAMP': TIMESTAMP,
    'X-SAASAPI-SIGN': signature,
    'X-SAASAPI-RECV-WINDOW': RECV,
    'content-type': 'application/json'
  };
  return headers;
};