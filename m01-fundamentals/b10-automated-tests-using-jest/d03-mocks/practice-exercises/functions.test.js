const functions = require('./functions');

test('#generateRandomNumber R1', () => {
  functions.generateRandomNumber = jest.fn().mockReturnValue(10);

  functions.generateRandomNumber();
  expect(functions.generateRandomNumber).toHaveBeenCalled();
  expect(functions.generateRandomNumber()).toBe(10);
  expect(functions.generateRandomNumber).toHaveBeenCalledTimes(2);
});

test('#generateRandomNumber R2', () => {
  functions.generateRandomNumber = jest
    .fn()
    .mockImplementationOnce((a, b) => a / b);

  expect(functions.generateRandomNumber(3, 3)).toBe(1);
  expect(functions.generateRandomNumber).toHaveBeenCalled();
  expect(functions.generateRandomNumber).toHaveBeenCalledTimes(1);
});

test('#generateRandomNumber R3', () => {
  functions.generateRandomNumber = jest
    .spyOn(functions, 'generateRandomNumber')
    .mockImplementation((a, b, c) => {
      return a * b * c;
    });

  expect(functions.generateRandomNumber(3, 3, 3)).toBe(27);
  expect(functions.generateRandomNumber).toHaveBeenCalled();
  expect(functions.generateRandomNumber).toHaveBeenCalledTimes(2);

  functions.generateRandomNumber.mockReset().mockImplementation((a) => a * 2);

  expect(functions.generateRandomNumber(3)).toBe(6);
  expect(functions.generateRandomNumber).toHaveBeenCalled();
  expect(functions.generateRandomNumber).toHaveBeenCalledTimes(1);
});

describe('#R4', () => {
  it('#getUpperCaseString', () => {
    functions.getUpperCaseString = jest
      .spyOn(functions, 'getUpperCaseString')
      .mockImplementation((str) => {
        return str.toLowerCase();
      });

    expect(functions.getUpperCaseString('VICTOR')).toBe('victor');
    expect(functions.getUpperCaseString).toHaveBeenCalled();
    expect(functions.getUpperCaseString).toHaveBeenCalledTimes(1);
  });

  it('#getFirstLetter', () => {
    functions.getFirstLetter = jest
      .spyOn(functions, 'getFirstLetter')
      .mockImplementation((str) => {
        return str[str.length - 1];
      });

    expect(functions.getFirstLetter('Victor')).toBe('r');
    expect(functions.getFirstLetter).toHaveBeenCalled();
    expect(functions.getFirstLetter).toHaveBeenCalledTimes(1);
  });

  it('#concatenateString', () => {
    functions.concatenateString = jest
      .spyOn(functions, 'concatenateString')
      .mockImplementation((str1, str2, str3) => {
        return str1.concat(str2, str3);
      });

    expect(functions.concatenateString('O ', 'teste ', 'funciona!')).toBe(
      'O teste funciona!'
    );
    expect(functions.concatenateString).toHaveBeenCalled();
    expect(functions.concatenateString).toHaveBeenCalledTimes(1);
  });
});

test('#R5', () => {
  functions.getUpperCaseString = jest
    .spyOn(functions, 'getUpperCaseString')
    .mockImplementation((str) => {
      return str.toLowerCase();
    });

  expect(functions.getUpperCaseString('VICTOR')).toBe('victor');
  expect(functions.getUpperCaseString).toHaveBeenCalled();
  expect(functions.getUpperCaseString).toHaveBeenCalledTimes(2);

  functions.getUpperCaseString.mockRestore();

  expect(functions.getUpperCaseString('victor')).toBe('VICTOR');
});

describe('#R6', () => {
  // source ref: https://jestjs.io/pt-BR/docs/asynchronous#asyncawait
  const mockAPI = jest.spyOn(functions, 'getDogPicturesAPI');
  afterEach(() => mockAPI.mockReset());

  it('request sucess', async () => {
    mockAPI.mockResolvedValue('request sucess');

    await expect(mockAPI()).resolves.toBe('request sucess');
    expect(mockAPI).toHaveBeenCalled();
    expect(mockAPI).toHaveBeenCalledTimes(1);
  });

  it('request failed', async () => {
    mockAPI.mockRejectedValue('request failed');

    await expect(mockAPI()).rejects.toMatch('request failed');
    expect(mockAPI).toHaveBeenCalled();
    expect(mockAPI).toHaveBeenCalledTimes(1);
  });
});
