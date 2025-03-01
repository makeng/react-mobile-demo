/*----------------------------------------------------------------------------------
 * desc: 错误处理
 * ----------------------------------------------------------------------------------*/
import { Message } from '@kdcloudjs/kdesign';

import { isInternalNet } from '@/utils/env';
import { AxiosError } from 'axios';

export function handleError(error: AxiosError) {
  const path = error.config?.url;
  let message = `请求错误：${error.code}`;
  if (isInternalNet()) {
    message += `，路径：${path}`;
  }
  Message.error(message);
  return Promise.reject(error);
}
