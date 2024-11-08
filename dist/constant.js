"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = {
  API_KEY: 'v1/users/openapi/apikey',
  BALANCE: 'openapi/v1/balance',
  TOKEN: 'openapi/v1/token',
  SPOT_ORDER_BOOK: 'openapi/v1/spot/orderbook',
  SPOT_ORDER: 'openapi/v1/spot/order/current',
  SPOT_ORDER_DETAIL: 'openapi/v1/spot/order/detail',
  SPOT_ORDERS: function SPOT_ORDERS(category) {
    return "openapi/v1/".concat(category, "/order/current");
  },
  CURRENCY: function CURRENCY(category) {
    return "openapi/v1/".concat(category, "/currencies");
  },
  POSITION: function POSITION(category) {
    return "openapi/v1/".concat(category, "/order/positions");
  },
  TRADE_HISTORY: function TRADE_HISTORY(category) {
    return "openapi/v1/".concat(category, "/order/history");
  }
};