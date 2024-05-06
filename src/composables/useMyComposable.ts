export const useMyComposable = () => {
  // 因为您的组合式函数在生命周期的正确位置被调用，
  // useRuntimeConfig也会正常工作
  const config = useRuntimeConfig();

  // ...
};
