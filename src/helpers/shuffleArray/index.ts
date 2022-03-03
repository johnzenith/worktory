/**
 * @see https://javascript.info/task/shuffle
 *
 * Note: null is returned if the array is empty
 */
const shuffleArray = (arrayToShuffle: (string | number)[]): string | number | null => {
  if (!arrayToShuffle.length) return null;

  for (let i = arrayToShuffle.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements arrayToShuffle[i] and arrayToShuffle[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = arrayToShuffle[i]; arrayToShuffle[i] = arrayToShuffle[j]; arrayToShuffle[j] = t
    [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
  }

  return arrayToShuffle[0];
};

export default shuffleArray;