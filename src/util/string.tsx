export const getShortString = (str: string) => {
  if (str.length > 12) return `${str.slice(0, 12)}...`;
  return str;
};
