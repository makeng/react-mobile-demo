/*----------------------------------------------------------------------------------
 * desc: 交互相关功能
 * ----------------------------------------------------------------------------------*/
export enum InteractionDelay {
  /** 点击的延迟时间 */
  CLICK = 20,
  /** 导航的延迟时间 */
  NAV = 500,
}

/**
 * 判定位窄屏幕
 */
export const checkIsSmallScreen = () => {
  const { clientWidth } = document.documentElement;
  const HIGH_PIXEL = 750;

  return clientWidth < HIGH_PIXEL;
};
