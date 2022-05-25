import { loremIpsum } from 'lorem-ipsum';
import capitalize from 'capitalize';
import randomNumber from "./randomNumber";

function randomWords({ min = 1, max = 1, capitalized = true }) {
  const words = loremIpsum({ count: randomNumber({ min, max }), units: 'words' });
  return capitalized ? capitalize.words(words) : words.toLowerCase();
}

export default randomWords;
