const a = 40;

const addFn = (param1, param2) => {
  return param1 + param2;
};

// export { a, addFn }; //exported names are not changeable
export { a };

export default addFn; //exported names are  changeable

// console.log(module);
