import {
  getExistRefreshToken, getExistToken, getTokenExpireDate, setRefreshToken, setToken,
} from '../utils/auth';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { reissue } from './auth';
import { deployInstance } from './instance';

deployInstance.interceptors.request.use(
  async (config) => {
    const tokenExpireDate = getTokenExpireDate();

    if (tokenExpireDate < Date.now()) {
      const accessToken = getExistToken();
      const refreshToken = getExistRefreshToken();

      await fetchWithHandler(() => reissue({ accessToken, refreshToken }), {
        onSuccess: (response) => {
          setToken({
            accessToken: response.data.accessToken,
            accessTokenExpiresIn: response.data.accessTokenExpiresIn,
          });
          setRefreshToken({ refreshToken: response.data.refreshToken });
        },
        onError: (error) => {
          throw error;
        },
      });
    }

    const token = getExistToken();

    const newConfig = config;
    newConfig.headers.Authorization = `Bearer ${token}`;

    return newConfig;
  },
  (error) => Promise.reject(error),
);
