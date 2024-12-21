export const splitText = (text: string) => {
  return text.split('').map((char, i) => ({
    char: char === ' ' ? '\u00A0' : char,
    index: i
  }));
};