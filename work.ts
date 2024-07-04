const add = (a: number, b: number): number => {
  let result = a + b;
  return result;
};

interface Truth {
  name: string;
  age: number;
  job: '학생';
}

const hoyeon = (): object => {
  let obj: Truth = {
    name: '정호연',
    age: 27,
    job: '학생',
  };
  return obj;
};
