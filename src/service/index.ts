import { workbenchResHandler } from '@/pages/wecom/service/interceptor';
import { handleError } from '@/service/error';
import axios from 'axios';

export enum Domain {
  SERVICE = 'https://service.jdy.com',
}

const DEFAULT_CONFIG = {
  timeout: 10000,
  timeoutErrorMessage: '请求超时，请稍后重试',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // CORS Allowed
};

// 平台方
const workbenchReq = axios.create({
  baseURL: `${Domain.SERVICE}/workbench/api`,
  ...DEFAULT_CONFIG,
});
workbenchReq.interceptors.response.use(workbenchResHandler, handleError);

export { workbenchReq };
