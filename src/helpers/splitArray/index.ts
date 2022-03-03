/**
 * Split an array into given size
 */
const splitArray = (arrayToSplit: any[], size: number): any[] => {
  const arrays = [];
  for (let i = 0; i <= arrayToSplit.length; i+=size) {
    arrays.push(arrayToSplit.slice(i, size));
  }
  return arrays;
};

export default splitArray;