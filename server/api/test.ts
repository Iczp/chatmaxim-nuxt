// export default () => ' Hello World :)'

// export default () => {
//   const id = 0;
//   return {
//     count: 1,
//     route: '',
//     id,
//   };
// };

let count = 0;
export default defineEventHandler(async (event) => {
  console.log('event', event);

  // ... 在这里做任何你想做的事情
  count++;
  return {
    count,
    event,
  };
});
