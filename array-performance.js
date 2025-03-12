const arrayCount = 20_000;

const arr = Array.from({ length: arrayCount }).map((_item, index) => ({
  index,
}));

const objectByIndex = Array.from({ length: arrayCount })
  .map((_item, index) => ({
    index: index * 2,
  }))
  .reduce((acc, curr) => {
    acc[curr.index] = curr;

    return acc;
  }, {});

const newArr = [];
const time = new Date();

for (const item of arr) {
  if (objectByIndex[item.index]) {
    newArr.push(item);
  }
}

console.log(`Took: ${new Date() - time}ms`);
