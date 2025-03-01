/**
 * 判断代理字符串是否包含特定标识
 * @param reg
 */
function checkIfUserAgentMatch(reg: RegExp): boolean {
  const { userAgent = '' } = navigator as Navigator;
  return !!userAgent.match(reg);
}

export const IS_DEV = process.env.NODE_ENV === 'development';

/**
 * 企业微信
 */
export const isWeCom = () => checkIfUserAgentMatch(/wxwork/);

/**
 * 钉钉
 */
export const isDingDing = () => checkIfUserAgentMatch(/DingTalk/);

/**
 * 是否是pc端
 */
export const isPc = () => {
  const { userAgent = '' } = navigator as Navigator;
  const agentStr = userAgent.toLowerCase();
  return !agentStr.includes('android') && !agentStr.includes('iphone');
};

/**
 * 按照平台返回结果。要求所有参数的类型一致
 * @param wecom 支持微信返回值
 * @param ding 支持钉钉返回值
 * @param defaultValue 默认值
 */
export function getByPlatform<T>(wecom: T, ding: T, defaultValue?: T) {
  if (isWeCom()) return wecom;
  if (isDingDing()) return ding;
  return defaultValue as T; // 返回默认值
}
