const arrayCount = 20_000;

const arr = Array.from({ length: arrayCount }).map((_item, index) => ({
  index,
}));

const arr2 = Array.from({ length: arrayCount }).map((_item, index) => ({
  index: index * 2,
}));

const newArr = [];
const time = new Date();

for (const item of arr) {
  if (arr2.some((itemArr2) => itemArr2.index === item.index)) {
    newArr.push(item);
  }
}

console.log(`Took: ${new Date() - time}ms`);
