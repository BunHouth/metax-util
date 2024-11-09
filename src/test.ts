import MetaXUtils from './';

const API_KEY = '';
const PRIVATE_KEY = '';
const XAUTHORIZATION = '';
const ENVIRONMENT = 'TEST';

const bootstrap = async () => {
  const util = new MetaXUtils({apiKey: API_KEY, privateKey: PRIVATE_KEY, xAuthorization: XAUTHORIZATION, environment: ENVIRONMENT});
  // -----------------------------API_KEY-----------------------------
  // Request to Exchange for generate the API KEY and PRIVATE KEY
  // const resp = await util.generateApiKey('W2o3n4g5');
  // console.log(`============================================================`)
  // console.log(resp)
  // console.log(`============================================================`)
  // -----------------------------API_KEY-----------------------------

  // -----------------------------BALANCE-----------------------------
  // Calling api for account balance
  // const balance = await util.balance();
  // console.log(`============================================================`)
  // console.log(balance)
  // console.log(`============================================================`)
  // -----------------------------BALANCE-----------------------------


  // -----------------------------CURRENCY-----------------------------
  // Calling api for account balance
  // const currency = await util.currency('futures');
  // console.log(`============================================================`)
  // console.log(currency)
  // console.log(`============================================================`)
  // -----------------------------CURRENCY-----------------------------

  // -----------------------------TOKEN-----------------------------
  // Calling api for fetch the token
  // const token = await util.token();
  // console.log(`============================================================`)
  // console.log(token)
  // console.log(`============================================================`)
  // -----------------------------TOKEN-----------------------------

  // -----------------------------POSITION-----------------------------
  // Calling api for fetch the position
  // const position = await util.position('futures', 'cross', 1, 20);
  // console.log(`============================================================`)
  // console.log(position)
  // console.log(`============================================================`)
  // -----------------------------POSITION-----------------------------

  // -----------------------------TRADE_HISTORY-----------------------------
  // Calling api for fetch the trade history
  // const tradeHistory = await util.tradeHistory('spot', 1, 20);
  // console.log(`============================================================`)
  // console.log(tradeHistory)
  // console.log(`============================================================`)
  // -----------------------------TRADE_HISTORY-----------------------------

  // -----------------------------SPOT_ORDER_BOOK-----------------------------
  // Calling api for fetch the spot Order Book
  // const spotOrderBook = await util.spotOrderBook('btcusdt');
  // console.log(`============================================================`)
  // console.log(spotOrderBook)
  // console.log(`============================================================`)
  // -----------------------------SPOT_ORDER_BOOK-----------------------------

  // -----------------------------SPOT_ORDER-----------------------------
  // Calling api for fetch the spot order
  // const spotOrder = await util.spotOrder('btcusdt', 'BUY', 1, 20);
  // console.log(`============================================================`)
  // console.log(spotOrder)
  // console.log(`============================================================`)
  // -----------------------------SPOT_ORDER-----------------------------

  // -----------------------------SPOT_ORDER_DETAIL-----------------------------
  // Calling api for fetch the spot orde detail
  // const spotOrderDetail = await util.spotOrderDetail(1);
  // console.log(`============================================================`)
  // console.log(spotOrderDetail)
  // console.log(`============================================================`)
  // -----------------------------SPOT_ORDER_DETAIL-----------------------------

  // -----------------------------SPOT_ORDERS-----------------------------
  // Calling api for fetch the spot orde detail
  // const spotOrders = await util.spotOrders('futures', 'cross', 1, 20);
  // console.log(`============================================================`)
  // console.log(spotOrders)
  // console.log(`============================================================`)
  // -----------------------------SPOT_ORDERS-----------------------------

  // -----------------------------CREATE_ORDER-----------------------------
  // Calling api for fetch the create order

  // For Futures Params Only
  // const params: any = {
  //   symbol: 'trx',
  //   positionType: 'limit',
  //   positionModel: 'cross',
  //   positionSide: 'long',
  //   leverage: String(30),
  //   quantity: 1,
  //   quantityUnit: 'usdt',
  //   price: 0.15013,
  // }

  // For Spot Params Only
  // const params: any = {
  //   symbol: 'trx',
  //   positionType: 'market',
  //   quantity: 1,
  //   quantityUnit: 'usdt',
  //   price: 0.16013,
  // }

  // const createOrder = await util.create('futures', params);
  // console.log(`============================================================`)
  // console.log(createOrder)
  // console.log(`============================================================`)
  // -----------------------------CREATE_ORDER-----------------------------

  // -----------------------------CLOSE_ORDER-----------------------------
  // Calling api for fetch the close order
  // For Spot Only
  // const params: any = {
  //   symbol: 'trx',
  //   positionType: 'market',
  //   quantity: 1,
  //   quantityUnit: 'usdt',
  // }

  // For Futures Only
  // const params: any = {
  //   symbol: 'trx',
  //   closeType: 'all',
  //   positionType: 'market',
  //   closeNum: 'usdt',
  //   price: 0.16011
  // }

  // const closeOrder = await util.close('futures', params);
  // console.log(`============================================================`)
  // console.log(closeOrder)
  // console.log(`============================================================`)
  // -----------------------------CLOSE_ORDER-----------------------------

  // -----------------------------CANCEL_ORDER-----------------------------
  // Calling api for fetch the cancel order
  // For Futures Only
  // const params: any = {
  //   symbol: 'btc',
  //   positionType: 'limit',
  //   id: 203902427
  // }

  // For Spot Only
  // const params: any = {
  //   id: 886673388422504400
  // }
  // const cancelOrder = await util.cancel('futures', params);
  // console.log(`============================================================`)
  // console.log(cancelOrder)
  // console.log(`============================================================`)
  // -----------------------------CANCEL_ORDER-----------------------------

  // -----------------------------TRANSFER-----------------------------
  // Calling api for fetch the transfer
  // const params: any = {
  //   fromBiz: 'asset',
  //   toBiz: 'spot',
  //   amount: 10000,
  //   currencyId: 6
  // }
  // const transfer = await util.transfer(params);
  // console.log(`============================================================`)
  // console.log(transfer)
  // console.log(`============================================================`)
  // -----------------------------TRANSFER-----------------------------

  // -----------------------------BATCH_CREATE_ORDER-----------------------------
  // Calling api for fetch the batch creation order
  // const symbol = 'btcusdt';
  // const type = 'limit' // limit | market
  // const direction: any = 'long' // long | short
  // const quantity = 1;
  // let leverage = 1;
  // const price = 54031.20;
  // let start = 0;
  // const params = []
  // for(let i=1 ; i <= 2 ; i++){

  //     start = start +1;

  //     leverage = Math.floor((Math.random()*(100-10+1))+5);
  //     params.push({
  //       symbol,
  //       type,
  //       direction,
  //       quantity,
  //       price,
  //       leverage,
  //       orderLinkId: `stress-${+new Date()}-${start}`
  //     })

  // }

  // const batchCreate = await util.batchCreate('futures', 'buy', params);
  // console.log(`============================================================`)
  // console.log(batchCreate)
  // console.log(`============================================================`)
  // -----------------------------BATCH_CREATE_ORDER-----------------------------

  // -----------------------------BATCH_CANCEL_ORDER-----------------------------
  // Calling api for fetch the batch cancel order
  // const cancelParams = batchCreate.data.map(obj => {
  //   return {
  //     symbol: 'btcusdt',
  //     orderId: obj.orderId,
  //     orderLinkId: obj.orderLinkId
  //   }
  // })

  // const batchCancel = await util.batchCancel('futures', cancelParams);
  // console.log(`============================================================`)
  // console.log(batchCancel)
  // console.log(`============================================================`)
  // -----------------------------BATCH_CANCEL_ORDER-----------------------------
}

bootstrap();

