import crypto from 'crypto' ;

export const sign = (header: string, data: {[key: string]: any}, privateKeyString: string) => {
  try {
    const srcData = header + Object.entries(data).map(([key, value]) => `${key}=${value}`).join('&');
    const privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKeyString}\n-----END PRIVATE KEY-----`;

    const sign = crypto.createSign('SHA256');
    sign.update(srcData);
    sign.end();
    const signature = sign.sign(privateKey);

    return signature.toString('base64');
  } catch (error) {
    console.log(error)
    return null;
  }
}

