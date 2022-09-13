const isAnagram = require("./anagram")

//Testes para função de anagramas

test('a função isAnagram existe?', () => {
  expect(typeof isAnagram).toEqual('function');
}); //pass

test('"cinema" é anagrama de "iceman"?', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
}); //pass

test('"Dormitory" é anagrama de "Bedroom"?', () => {
  expect(isAnagram('Dormitory', 'Bedroom')).toBeTruthy();
}); //fail

test('"Hello" NÃO é anagrama de "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
}); //pass
