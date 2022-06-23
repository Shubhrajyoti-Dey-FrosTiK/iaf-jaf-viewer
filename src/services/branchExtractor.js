export const branchExtractor = (branch) => {
  if (!branch) return "NA";
  let res = "";
  for (let key in branch) {
    if (branch[key]) {
      if(branch[key].length === 0) continue;
      res += key.toString() + " , ";
    }
  }
  return res;
};
