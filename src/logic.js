const passwordStrengthLogic = (characthersTypeObject, length) => {
  let charactersStrength = 0;
  for (const state in characthersTypeObject) {
    if (characthersTypeObject[state]) charactersStrength += 2;
  }
  return length + charactersStrength;
};
