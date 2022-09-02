export const compareByEmail = (data) => {
  console.log(data)
  return data.sort(function (a, b) {
    if (a.email < b.email) {
      return -1;
    }
    if (a.email > b.email) {
      return 1;
    }
    return 0;
  });
  
};
