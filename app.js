// const a = (a, b) => {
//   let result = a + b;
//   return result;
// };

const a = (...args) => {
  let result = args[0] + args[1];
  const oneMore = () => {
    return result + 10;
  };
  return oneMore();
};
