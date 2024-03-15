const lowercaseLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
const uppercaseLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
const algarisms = Array.from({ length: 10 }, (_, i) => String(i));
const specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "-"];

let matrix = [lowercaseLetters, uppercaseLetters, algarisms, specialCharacters];

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

export const passwordCreatorLogic = (userIncludings, passwordLength) => {
  let auxiliarArray = [];
  let index = 0;
  for (const type in userIncludings) {
    if (userIncludings[type]) auxiliarArray.push(...matrix[index]);
    index++;
  }

  let newPassword = "";
  const auxLength = auxiliarArray.length;
  let randomIndex, pastIndex;
  for (let i = 0; i < passwordLength; i++) {
    pastIndex = randomIndex;
    randomIndex = Math.floor(Math.random() * auxLength);
    while (randomIndex === pastIndex) {
      randomIndex = Math.floor(Math.random() * auxLength);
    }
    newPassword += auxiliarArray[randomIndex];
  }
  return newPassword;
};
