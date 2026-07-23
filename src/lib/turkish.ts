// Turkish suffix helpers — vowel harmony + consonant hardening for city names.
// "İzmir" + locative → "İzmir'de", "Gaziantep" → "Gaziantep'te", "Ankara" → "Ankara'da"

const FRONT_VOWELS = 'eiöüEİÖÜ';
const VOWELS = 'aeıioöuüAEIİOÖUÜ';
const HARD_CONSONANTS = 'fstkçşhpFSTKÇŞHP';

function lastVowelIsFront(word: string): boolean {
  for (let i = word.length - 1; i >= 0; i--) {
    if (VOWELS.includes(word[i])) return FRONT_VOWELS.includes(word[i]);
  }
  return false;
}

function endsHard(word: string): boolean {
  return HARD_CONSONANTS.includes(word[word.length - 1]);
}

/** "İstanbul" → "İstanbul'da", "İzmir" → "İzmir'de", "Gaziantep" → "Gaziantep'te" */
export function locative(name: string): string {
  const vowel = lastVowelIsFront(name) ? 'e' : 'a';
  const consonant = endsHard(name) ? 't' : 'd';
  return `${name}'${consonant}${vowel}`;
}

/** "İstanbul" → "İstanbul'dan", "İzmir" → "İzmir'den", "Gaziantep" → "Gaziantep'ten" */
export function ablative(name: string): string {
  return `${locative(name)}n`;
}
