export const isEmptyObject = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

export const isPositiveObject = (obj) => {
  if (!obj) return true;
  return !Object.keys(obj).some(key => !!obj[key]);
};
