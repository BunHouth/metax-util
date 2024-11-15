export type CURRENCY_QUERY = 'futures' | 'options' | 'spot'
export type POSITION_MODEL = 'cross' | 'fix'
export type POSITION_TYPE = 'market' | 'limit'
export type SIDE_PARAMS = 'BUY' |'SELL'
export type SIDE_LOWER_PARAMS = 'buy' |'sell'
export type TRADE_DIRECTION = 'long' | 'short'

export type CANCEL_ORDER_PARAMS = {
  id: string | number,
  symbol?: string,
  positionType?: POSITION_TYPE
}

export type BATCH_CANCEL_PARAMS = {
  symbol: string,
  orderId: number,
  orderLinkId: string,
}[];

export type BATCH_CREATE_PARAMS = {
  symbol: string,
  type: string,
  direction: TRADE_DIRECTION,
  quantity: number,
  leverage: number,
  orderLinkId: string,
  price: number,
}[]

export type TRANSFER_PARAMS = {
  fromBiz: CURRENCY_QUERY & 'asset',
  toBiz: CURRENCY_QUERY & 'asset',
  amount: string,
  currencyId: string | number,
}

export type ORDER_CREATE_PARAMS = {
  symbol: string,
  positionType: POSITION_TYPE,
  positionModel?: 'fix' | 'cross',
  positionSide?: SIDE_LOWER_PARAMS,
  leverage?: number | string,
  quantity: number | string,
  quantityUnit: string,
  price: number | string,
}

export type CLOSE_ORDER_PARAMS = {
  symbol: string,
  positionType: POSITION_TYPE,
  quantityUnit: string,
  quantity: string | number,
  // for futures only
  closeType?: string,
  closeNum?: string | number,
  price?: number | string
}

export type STANDARD_API_RESPONSE = {
  code: number,
  msg: string,
  info: any
}

export type API_KEY_PAYLOAD = {
  code: number,
  data: {
    apikey: string,
    ip_white_lists: string,
    privateKey: string,
  },
  msg: string
}

export type NumNull = null | number;

export type ASK_BID = [number, number];

export type CURRENCY_BALANCE = {
  available: number,
  availableMargin: number,
  availableStr: string,
  crossedMargin: NumNull,
  crossedProfit: NumNull,
  fixedMargin: NumNull,
  fixedProfit: NumNull,
  gridMargin: NumNull,
  gridProfit: NumNull,
  hold: number,
  infiniteBonus: number,
  infiniteMargin: number,
  infiniteProfit: number,
  infiniteProfitUnreal: number,
  insurance: number,
  margin: number,
  profitUnreal: number,
  realizedProfit: number,
  simulatedAvailable: number,
  simulatedMargin: number,
  simulatedProfitUnreal: number,
  total: number
}

export type CHAIN = {
  chain_type: number,
  code: string,
  name: string,
  standard: string,
}

export type TOKEN_CURRENCY = {
  balance: CURRENCY_BALANCE,
  chains: CHAIN[],
  bizName: string,
  code: string,
  coinLogo: string | null,
  coinName: string | null,
  displayCode: string,
  exchangeable: boolean,
  id: number,
  name: string,
  outerTransferable: boolean,
  precisions: string | number,
  price: number,
  receivable: boolean,
  rechargeable: boolean,
  symbol: string,
  transferable: boolean,
  value: number,
  withdrawable: boolean,
}

export type ACCOUNT_BALANCE = {
  total: number,
  currencies: TOKEN_CURRENCY,
  biz: {
    layout: string,
    name: string,
    sort:number,
    status: number,
    transferOnly: boolean
  }
}
export type TRADE_HISTORY_PAYLOAD = {
  data: {
    nextId: number,
    prevId: number,
    rows: any[],
    total: number
  }
} & STANDARD_API_RESPONSE;

export type SPOT_ORDER_DETAIL_PAYLOAD = {
  data: any
} & STANDARD_API_RESPONSE;

export type CREATE_ORDER_PAYLOAD = {
  data: any
} & STANDARD_API_RESPONSE;

export type BATCH_CREATE_PAYLOAD = {
  data: {code: number, msg: string, orderId: number, orderLinkId: string, processAt: number, symbol: string}[]
} & STANDARD_API_RESPONSE

export type SPOT_ORDERS_PAYLOAD = {
  data: {
    nextId: number,
    prevId: number,
    rows: any[] | null,
    total: number
  }
} & STANDARD_API_RESPONSE;

export type SPOT_ORDER_PAYLOAD = {
  data: {
    orderTotal: number,
    orders: {
      nextId: number,
      prevId: number,
      rows: any[] | null,
      total: number
    }
  }
} & STANDARD_API_RESPONSE;

export type SPOT_ORDER_BOOK_PAYLOAD = {
  data: {
    asks: ASK_BID[],
    bids: ASK_BID[],
    symbolName: string,
    ts: number
  }
} & STANDARD_API_RESPONSE;

export type TOKEN_PAYLOAD = {
  data: string
} & STANDARD_API_RESPONSE;

export type BALANCE_PAYLOAD = {
  data: {
    accounts: ACCOUNT_BALANCE[],
    quote: string,
    total: number
  }
} & STANDARD_API_RESPONSE;

export type CURRENCY_DATA = {
  code: string,
  displayCode: string,
  exchangeable: null | boolean,
  id: number,
  name: string,
  outerTransferable: null | boolean,
  receivable: null | boolean,
  rechargeable: null | boolean,
  symbol: string,
  transferable: null | boolean,
  withdrawable: null | boolean
};

export type CURRENCY_PAYLOAD = {
  data: CURRENCY_DATA[],
} & STANDARD_API_RESPONSE

export type POSITION_PAYLOAD = {
  data: {
    nextId: number,
    prevId: number,
    rows: any[],
    total: number
  }
} & STANDARD_API_RESPONSE;

export type MetaXUtilsParams = {
  apiKey?: string;
  privateKey?: string;
  xAuthorization?: string;
  environment?: 'TEST' | 'PRODUCTION';
};