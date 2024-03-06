export const passwordStrengthLogic = (characthersTypeObject, length) => {
  let charactersStrength = parseInt(length);
  for (const state in characthersTypeObject) {
    if (characthersTypeObject[state]) charactersStrength += 2;
  }
  console.log(charactersStrength);
  return charactersStrength;
};
