function shuffleArray(array) {
  // We loop backwards from the end of the array to the first element
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements array[i] and array[j] using array destructuring
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default shuffleArray;
