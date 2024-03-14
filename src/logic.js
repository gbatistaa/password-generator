const uppercaseLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
const lowercaseLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
const algarisms = Array.from({ length: 10 }, (_, i) => String(i));
const specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "-"];

export const passwordStrengthLogic = (characthersTypeObject, length) => {
  let passwordStrength = parseInt(length);
  for (const state in characthersTypeObject) {
    if (characthersTypeObject[state]) passwordStrength += 2;
  }
  return passwordStrength;
};

export const passwordStrengthColor = (passwordStrength) => {
  if (passwordStrength <= 13) {
    return "#ff0000";
  } else if (passwordStrength <= 20) {
    return "#ff7f00";
  } else if (passwordStrength <= 27) {
    return "#ffff00";
  } else {
    return "#5ACA75";
  }
};

export const passwordCreatorLogic = ({ lower, upper, numbers, symbols }) => {
  let auxiliarArray = [];
  if (lower) auxiliarArray.push(...lowercaseLetters);
  if (upper) auxiliarArray.push(...uppercaseLetters);
  if (numbers) auxiliarArray.push(...algarisms);
  if (symbols) auxiliarArray.push(...specialCharacters);
};
