import MetaXUtils from './';

const bootstrap = async () => {
  const util = new MetaXUtils({apiKey: '16094f6b8bdb0625e00e5baf23e777f806191c2fc13038f69c7b5c95c3b6de5d', privateKey: 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIK167rIej7AS0P3oMBPMeECMoeJug2jCk/YKTF2behgL8wpnvOkthmzX/QCwvQXnTiMW2mPN51yXGueC6ZmR1oCE4SDgDc67QgznQFej2PI+w9ECqlpjnfbJ19Ef6/k63dPt8Q2FNJJU3TZIqYrG5YAHCW+NDsKR6tbBZjjJ8VrAgMBAAECgYAGKEWPtSamxRd42mOc9vTv6XeECEfyDu+dWR7JXFjmpg+YEGtJ8sTgZqFmcE1vcJtVUPa9IZrqcAQw8wqh4R9mjepJQlDXCwctOqZWznAcTGeXSTH1QYJZIb1CPOGiOODCaCzR9YnyYzPLclwDLUvk9b4/3NjUeOweREMmtG9hWQJBAJod1tEMz6zNdq5JCUh89xim9sDyz6rRbLc2mIQOHx0IeKEFkyotwmtm89Tr1ldrrd0hzbvObhpOy19giinCdokCQQDZHvEXx61vMtmvD+MmIuCAOAXA9n13e0MnP63ehoxZcnUALaiAma74o7KGudUgSLM7f+3oYqud+lQDds0eit9TAkBSCuB4mSFVFGvBjA/tDtlbvkZNoPT8MlB1mBLI+duGUSQmVBlrssB0/HGBP6rzDteXiI9FEzd5uch6FaJ3aJZBAkEAulcZ56TRrpvfw6VI99P7BVAPcBqcd8zsR2UZnd+v2Jyo2axV73j2eCJV99bJmVmLqccTsdvtGjpbnFV7mXjqTQJAKITxyQ6cCcWTO6tzz4U5zVh6YAk5YIpWFVII+emdZlMycgJG8HL2NKXNeZ+XWBZNaxGrEQPnj2HyjVc4KtNTTg==', xAuthorization: '35a460e6130d84a26701d1eac97cb70412c0d9d966c0344afc86f6464936d8ee', environment: 'TEST'});
  // const resp = await util.generateApiKey('W2o3n4g5');
  // console.log({resp})
  await util.currency('futures')
  const balance = await util.balance();
  console.log({balance});
}

bootstrap();;