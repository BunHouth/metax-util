
import axios from 'axios';
import {
  MetaXUtilsParams,
  ORDER_CREATE_PARAMS,
  TRANSFER_PARAMS,
  SIDE_LOWER_PARAMS,
  CANCEL_ORDER_PARAMS,
  BATCH_CANCEL_PARAMS,
  BATCH_CREATE_PARAMS,
  CLOSE_ORDER_PARAMS,
  API_KEY_PAYLOAD,
  BALANCE_PAYLOAD,
  CURRENCY_PAYLOAD,
  CURRENCY_QUERY,
  TOKEN_PAYLOAD,
  POSITION_PAYLOAD,
  POSITION_MODEL,
  TRADE_HISTORY_PAYLOAD,
  SIDE_PARAMS,
  SPOT_ORDER_BOOK_PAYLOAD,
  SPOT_ORDER_PAYLOAD,
  SPOT_ORDER_DETAIL_PAYLOAD,
  SPOT_ORDERS_PAYLOAD,
  CREATE_ORDER_PAYLOAD,
  BATCH_CREATE_PAYLOAD,
} from './types'
import ENDPOINTS from './constant';
import {createHeader} from './utils/header';
import {removeEmpty, sortObject} from './utils';

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
    const headers = createHeader({page, pageSize, positionModel}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.POSITION(category), {params: {page, pageSize, positionModel}, headers});

    return data;
  }

  public async tradeHistory(category: CURRENCY_QUERY, page: number = 1, pageSize: number = 20): Promise<TRADE_HISTORY_PAYLOAD> {
    const headers = createHeader({page, pageSize}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.TRADE_HISTORY(category), {params: {page, pageSize}, headers});

    return data;
  }

  public async spotOrderBook(symbol: string): Promise<SPOT_ORDER_BOOK_PAYLOAD> {
    const headers = createHeader({symbol}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.SPOT_ORDER_BOOK, {params: {symbol}, headers});

    return data;
  }

  public async spotOrder(symbol: string, side: SIDE_PARAMS, page: number, pageSize: number): Promise<SPOT_ORDER_PAYLOAD> {
    const headers = createHeader({page, pageSize, side, symbol}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.SPOT_ORDER, {params: {page, pageSize, side, symbol}, headers});

    return data;
  }

  public async spotOrderDetail(id: number | string): Promise<SPOT_ORDER_DETAIL_PAYLOAD> {
    const headers = createHeader({id: String(id)}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.SPOT_ORDER_DETAIL, {params: {id: String(id)}, headers});

    return data;
  }

  public async spotOrders(category: CURRENCY_QUERY, positionModel: POSITION_MODEL, page: number, pageSize: number): Promise<SPOT_ORDERS_PAYLOAD> {
    const headers = createHeader({page, pageSize, positionModel}, this.apiKey, this.privateKey);
    const {data} = await axios.get(ENDPOINTS.SPOT_ORDERS(category), {params: {page, pageSize, positionModel}, headers});

    return data;
  }

  public async create(category: CURRENCY_QUERY, params: ORDER_CREATE_PARAMS): Promise<CREATE_ORDER_PAYLOAD> {
    params.price = String(params.price);
    params.quantity = String(params.quantity);
    if(params.leverage && category === 'futures') {
      params.leverage = String(params.leverage);
    }
    const headers = createHeader(sortObject(removeEmpty(params)), this.apiKey, this.privateKey);
    const {data} = await axios.post(ENDPOINTS.CREATE_ORDER(category), params, {headers});

    return data;
  }

  public async close(category: CURRENCY_QUERY, params: CLOSE_ORDER_PARAMS): Promise<any> {
    params.quantity = String(params.quantity);
    if(params.price) {
      params.price = String(params.price);
    }
    const headers = createHeader(sortObject(removeEmpty(params)), this.apiKey, this.privateKey);
    const {data} = await axios.post(ENDPOINTS.CLOSE_ORDER(category), sortObject(removeEmpty(params)), {headers});

    return data;
  }

  public async cancel(category: CURRENCY_QUERY, params: CANCEL_ORDER_PARAMS): Promise<any> {
    params.id = String(params.id);
    const headers = createHeader(sortObject(removeEmpty(params)), this.apiKey, this.privateKey);
    const {data} = await axios.post(ENDPOINTS.CANCEL_ORDER(category), sortObject(removeEmpty(params)), {headers});

    return data;
  }

  public async transfer(params: TRANSFER_PARAMS): Promise<any> {
    params.amount = String(params.amount);
    params.currencyId = String(params.currencyId);
    const headers = createHeader(sortObject(removeEmpty(params)), this.apiKey, this.privateKey);
    const {data} = await axios.post(ENDPOINTS.TRANFER, sortObject(removeEmpty(params)), {headers});

    return data;
  }

  public async batchCreate(category: CURRENCY_QUERY, side: SIDE_LOWER_PARAMS, params: BATCH_CREATE_PARAMS): Promise<BATCH_CREATE_PAYLOAD> {
    const body = params.map(obj => sortObject(removeEmpty(obj)))
    const headers = createHeader({body: JSON.stringify(body)}, this.apiKey, this.privateKey);
    const {data} = await axios.post(ENDPOINTS.BATCH_CREATE(category, side), {body: JSON.stringify(body)}, {headers});

    return data;
  }

  public async batchCancel(category: CURRENCY_QUERY, params: BATCH_CANCEL_PARAMS): Promise<BATCH_CREATE_PAYLOAD> {
    const body = params.map(obj => sortObject(removeEmpty(obj)))
    const headers = createHeader({body: JSON.stringify(body)}, this.apiKey, this.privateKey);
    const {data} = await axios.post(ENDPOINTS.BATCH_CANCEL(category), {body: JSON.stringify(body)}, {headers});

    return data;
  }
}

export default MetaXUtils;
