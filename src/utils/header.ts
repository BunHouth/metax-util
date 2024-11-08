
import {sign} from './signature';

export const createHeader = (params: {[key: string]: any}, apiKey: string, privateKey: string) => {
  const RECV = String(5000);
  const TIMESTAMP = Date.now().toString();
  const signData = TIMESTAMP + apiKey + RECV;
  const signature = sign(signData, params, privateKey);
  console.log({signature})

  const headers = {
      'X-SAASAPI-API-KEY': apiKey,
      'X-SAASAPI-TIMESTAMP': TIMESTAMP,
      'X-SAASAPI-SIGN': signature,
      'X-SAASAPI-RECV-WINDOW': RECV,
      'content-type': 'application/json'
  };

  return headers;
}
