import { sleep } from 'radash'

/**
 * 模拟计算。数量 x10 达到演示的效果即可
 * @param n
 */
export function mockCalcByServer(n: number) {
  const randomFetchTime = Math.random() * 1000
  console.log(randomFetchTime)
  return sleep(randomFetchTime).then(() => n * 10)
}
