import {CURRENCY_QUERY} from './types';

export default {
  API_KEY: 'v1/users/openapi/apikey',
  BALANCE: 'openapi/v1/balance',
  TOKEN: 'openapi/v1/token',
  SPOT_ORDER_BOOK: 'openapi/v1/spot/orderbook',
  SPOT_ORDER: 'openapi/v1/spot/order/current',
  SPOT_ORDER_DETAIL: 'openapi/v1/spot/order/detail',
  SPOT_ORDERS: (category: CURRENCY_QUERY) => `openapi/v1/${category}/order/current`,
  CURRENCY: (category: CURRENCY_QUERY) => `openapi/v1/${category}/currencies`,
  POSITION: (category: CURRENCY_QUERY) => `openapi/v1/${category}/order/positions`,
  TRADE_HISTORY: (category: CURRENCY_QUERY) => `openapi/v1/${category}/order/history`,
}
