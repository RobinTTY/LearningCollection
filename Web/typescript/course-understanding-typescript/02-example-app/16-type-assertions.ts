// Typescript only knows that this is some kind of HTML element
const userInputElement = document.getElementById('user-input') as HTMLInputElement;
// value can only be used because we told Typescript that this is an HTMLInputElement
userInputElement.value = 'Hi there!';
