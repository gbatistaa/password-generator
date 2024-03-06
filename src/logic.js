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
