function getKey(k) {
    return `a key named ${k}`;
  }
  
  // bad
//   const obj = {
//     id: 5,
//     name: 'San Francisco',
//   };
//   obj[getKey('enabled')] = true;
  
  // good
  const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };
  console.log(getKey(obj))

  let count = 1;
  let condo = 1;
if (true) {
  count= condo + 100 ;
}
console.log(count)