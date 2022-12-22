function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

let result = generateError("An error occurred!", 500);
// Doesn't produce a value, so it's a never type
console.log(result);

function infiniteLoop(): never {
  while (true) {}
}
