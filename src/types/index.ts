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

export type TRADE_HISTORY_PAYLOAD = {}
export type TOKEN_PAYLOAD = {}
export type BALANCE_PAYLOAD = {}
export type CURRENCY_PAYLOAD = {}
export type POSITION_PAYLOAD = {}

export type MetaXUtilsParams = {
  apiKey?: string;
  privateKey?: string;
  xAuthorization?: string;
  environment?: 'TEST' | 'PRODUCTION';
};