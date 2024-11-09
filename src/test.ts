import MetaXUtils from './';

const API_KEY = '';
const PRIVATE_KEY = '';
const XAUTHORIZATION = '';
const ENVIRONMENT = 'TEST';

const bootstrap = async () => {
  const util = new MetaXUtils({apiKey: API_KEY, privateKey: PRIVATE_KEY, xAuthorization: XAUTHORIZATION, environment: ENVIRONMENT});
  // -----------------------------API_KEY-----------------------------
  // Request to Exchange for generate the API KEY and PRIVATE KEY
  const resp = await util.generateApiKey('Fund Password');
  console.log({resp})
  // -----------------------------API_KEY-----------------------------
  // await util.currency('futures')
  // const balance = await util.balance();
  // console.log({balance});
  // console.log(JSON.stringify(balance));
}

bootstrap();;