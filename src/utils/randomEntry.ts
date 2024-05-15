/**
 *
 * @param arr
 * @returns
 */

export const randomEntry = (arr: Array<any>) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// 它将作为randomEntry()可用（文件名的驼峰形式，不包括扩展名）
// export default randomEntry;
