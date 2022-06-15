export const branchExtractor = (branch) => {
  if (!branch) return "NA";
  let res = "";
  for (let key in branch) {
    if (branch[key]) {
      res += key.toString() + " , ";
    }
  }
  return res;
};
