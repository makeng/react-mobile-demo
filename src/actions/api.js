import request from "./requestConfig";
import domain from "./domain";
/*-------------------------------------------- 登录 --------------------------------------------*/

/** 用户登录
 * @param {object} params
 */
export const login = params => {
  return request.post(`/ologin/login`, params).then(res => res.data);
};

/**
 * 获取用户信息
 */
export const getProfileInfo = () => {
  return request.get(`/ouser/profile`).then(res => res.data);
};
