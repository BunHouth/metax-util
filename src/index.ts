
import axios from 'axios';
import {
  MetaXUtilsParams,
  API_KEY_PAYLOAD,
  BALANCE_PAYLOAD,
  CURRENCY_PAYLOAD,
  CURRENCY_QUERY,
  TOKEN_PAYLOAD,
  POSITION_PAYLOAD,
  POSITION_MODEL,
  TRADE_HISTORY_PAYLOAD,
  SIDE_PARAMS
} from './types'
import ENDPOINTS from './constant';
import {createHeader} from './utils/header';

const urls = {
  TEST: 'https://dev1.123kj.top',
  PRODUCTION: 'https://www.metax-pro.io'
}

class MetaXUtils {
  private readonly apiKey: string;
  private readonly privateKey: string;
  private readonly xAuthorization: string
  private readonly baseURL: string;

  constructor({ apiKey = '', privateKey = '', xAuthorization = '', environment = 'PRODUCTION' }: MetaXUtilsParams) {
    this.apiKey = apiKey;
    this.privateKey = privateKey;
    this.xAuthorization = xAuthorization;
    this.baseURL = urls[environment];

    axios.defaults.baseURL = this.baseURL;
  }

  public async generateApiKey(password: string): Promise<API_KEY_PAYLOAD> {
    const {data} = await axios.post(ENDPOINTS.API_KEY, {}, {params: {assetPwd: password, reset: 'apikey'}, headers: {
      'X-Authorization': this.xAuthorization,
      'content-type': 'application/json'
    }})

    return data;
  }

  public async balance(): Promise<BALANCE_PAYLOAD> {
    const headers = createHeader({}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.BALANCE, {headers});

    return data;
  }

  public async currency(category: CURRENCY_QUERY): Promise<CURRENCY_PAYLOAD> {
    const headers = createHeader({}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.CURRENCY(category), {headers});

    return data;
  }

  public async token(): Promise<TOKEN_PAYLOAD> {
    const headers = createHeader({}, this.apiKey, this.privateKey);
    const {data} = await axios.post(ENDPOINTS.TOKEN, {}, {headers});

    return data;
  }

  public async position(category: CURRENCY_QUERY, positionModel: POSITION_MODEL = 'cross', page: number = 1, pageSize: number = 20): Promise<POSITION_PAYLOAD> {
    const headers = createHeader({positionModel, page, pageSize}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.POSITION(category), {params: {page, pageSize, positionModel}, headers});

    return data;
  }

  public async tradeHistory(category: CURRENCY_QUERY, page: number = 1, pageSize: number = 20): Promise<TRADE_HISTORY_PAYLOAD> {
    const headers = createHeader({page, pageSize}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.TRADE_HISTORY(category), {params: {page, pageSize}, headers});

    return data;
  }

  public async spotOrderBook(symbol: string): Promise<TRADE_HISTORY_PAYLOAD> {
    const headers = createHeader({symbol}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.SPOT_ORDER_BOOK, {params: {symbol}, headers});

    return data;
  }

  public async spotOrder(symbol: string, side: SIDE_PARAMS, page: number, pageSize: number): Promise<TRADE_HISTORY_PAYLOAD> {
    const headers = createHeader({page, pageSize, symbol, side}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.SPOT_ORDER, {params: {page, pageSize, symbol, side}, headers});

    return data;
  }

  public async spotOrderDetail(id: number | string): Promise<TRADE_HISTORY_PAYLOAD> {
    const headers = createHeader({id: String(id)}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.SPOT_ORDER_DETAIL, {params: {id: String(id)}, headers});

    return data;
  }

  public async spotOrders(category: CURRENCY_QUERY, positionModel: POSITION_MODEL, page: number, pageSize: number): Promise<TRADE_HISTORY_PAYLOAD> {
    const headers = createHeader({page, pageSize, positionModel}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.SPOT_ORDERS(category), {params: {page, pageSize, positionModel}, headers});

    return data;
  }
}

export default MetaXUtils;
