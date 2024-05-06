// export default () => ' Hello World :)'

import requester from '@/services/request';

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
  requester
    .request({
      url: '/api/abp/api-definition?IncludeTypes=false',
      method: 'GET',
    })
    .then((res) => {
      // console.log('res', res);
    })
    .catch((err) => {
      // console.log('err', err);
    });
  // ... 在这里做任何你想做的事情
  count++;
  return {
    count,
    event,
    // data: res,
  };
});
