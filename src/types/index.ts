export type CURRENCY_QUERY = 'futures' | 'options' | 'spot'
export type POSITION_MODEL = 'cross' | 'fix'
export type SIDE_PARAMS = 'BUY' |'SELL'
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
export type TRADE_HISTORY_PAYLOAD = {}
export type TOKEN_PAYLOAD = {}
export type BALANCE_PAYLOAD = {
  code: number,
  info: any,
  msg: string,
  data: {
    accounts: ACCOUNT_BALANCE[],
    quote: string,
    total: number
  }
}
export type CURRENCY_PAYLOAD = {}
export type POSITION_PAYLOAD = {}

export type MetaXUtilsParams = {
  apiKey?: string;
  privateKey?: string;
  xAuthorization?: string;
  environment?: 'TEST' | 'PRODUCTION';
};