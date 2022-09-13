const functions = require("./functions")

const nameCheck = () => console.log('Checando nome...');

describe('Checando nomes', () => {
  beforeEach(() => nameCheck());

  test('User é o Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User é a Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

// toBe
test('Soma 2 + 2. Deve ser igual à 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Soma 2 + 2. Não deve ser igual à 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Checagem por valores TRUTHY ou FALSY
// toBeNull valida apenas null
// toBeUndefined valida apenas undefined
// toBeDefined é o oposto de toBeUndefined
// toBeTruthy valida tudo que um if statement trata como true
// toBeFalsy valida tudo que um if statement trata como false

// toBeNull
test('Deve ser nulo', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Deve ser falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('Usuário deve ser um objeto com o primeiro nome João e o último nome Mário', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'João',
    lastName: 'Mário'
  });
});

// Less than and greater than
test('Deve ser menor ou igual à 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('Não deve conter a letra i (nem maiúsculo nem minúsculo)', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Na lista usernames deve haver um usuário com o nome "admin"', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Trabalhando com async

// Promise
// test('User tem que ser Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });

// Async Await
test('User tem que ser Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
