const userInput = "";
// empty string is falsy value => storedData will be "DEFAULT"
const storedData = userInput || "DEFAULT";

// storedData2 will be an empty string
const storedData2 = userInput ?? "DEFAULT";
