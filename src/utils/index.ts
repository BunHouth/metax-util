export const sortObject = (payload: {[key: string]: any}) => {
  return Object.keys(payload)
    .sort()
    .reduce((acc: {[key: string]: any}, key: string) => {
      acc[key] = payload[key];
      return acc;
    }, {});
}

export const removeEmpty = (obj: {[key: string]: any}) => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, value]) => 
        value !== null && 
        value !== undefined && 
        value !== '' && 
        !(Array.isArray(value) && value.length === 0) && 
        !(typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0)
      )
  );
}
