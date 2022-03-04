/**
 * Split an array into given size
 */
const splitArray = (arrayToSplit: any[], size: number): any[] => {
  const arrays = [];
  for (let i = 0; i <= arrayToSplit.length; i+=size) {
    // Slice the next size
    const slicePos    = i > 0 ? i + size : size;
    const slicedArray = arrayToSplit.slice(i, slicePos);
    
    slicedArray.length && arrays.push(slicedArray);
  }
  return arrays;
};

export default splitArray;