import { baseUrl } from '~/env';

export const useEnv = () => {
  return {
    baseUrl: process.env.APP_BASE_URL,
  };
};
