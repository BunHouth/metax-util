import {CURRENCY_QUERY, SIDE_LOWER_PARAMS} from './types';

export default {
  API_KEY: 'v1/users/openapi/apikey',
  BALANCE: 'openapi/v1/balance',
  TOKEN: 'openapi/v1/token',
  SPOT_ORDER_BOOK: 'openapi/v1/spot/orderbook',
  SPOT_ORDER: 'openapi/v1/spot/order/current',
  SPOT_ORDER_DETAIL: 'openapi/v1/spot/order/detail',
  TRANFER: 'openapi/v1/transfer',
  BATCH_CANCEL:(category: CURRENCY_QUERY) => `openapi/v1/${category}/order/batch_cancel`,
  BATCH_CREATE:(category: CURRENCY_QUERY, side: SIDE_LOWER_PARAMS) => `openapi/v1/${category}/order/batch_create/${side}`,
  CANCEL_ORDER:(category: CURRENCY_QUERY) => `openapi/v1/${category}/order/cancel`,
  CLOSE_ORDER:(category: CURRENCY_QUERY) => `openapi/v1/${category}/order/close`,
  CREATE_ORDER:(category: CURRENCY_QUERY) => `openapi/v1/${category}/order/create`,
  SPOT_ORDERS: (category: CURRENCY_QUERY) => `openapi/v1/${category}/order/current`,
  CURRENCY: (category: CURRENCY_QUERY) => `openapi/v1/${category}/currencies`,
  POSITION: (category: CURRENCY_QUERY) => `openapi/v1/${category}/order/positions`,
  TRADE_HISTORY: (category: CURRENCY_QUERY) => `openapi/v1/${category}/order/history`,
}
