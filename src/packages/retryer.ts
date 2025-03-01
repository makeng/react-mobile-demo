type Checker = () => boolean | unknown;

/**
 * 重试器
 * 直到满足条件，或者达到重试次数上限，停止
 */
export class Retryer {
  private readonly gap: number; // 查询间隔（毫秒）
  private readonly retry: number; // 重试次数上限
  private readonly checker: Checker; // 查询条件

  private intervalId: any; // 定时器 ID
  private retryCount: number = 0; // 当前重试次数

  constructor(gap: number, retry: number, condition: Checker) {
    this.gap = gap;
    this.retry = retry;
    this.checker = condition;
  }

  start() {
    this.intervalId = setInterval(() => {
      if (this.checker()) {
        this.stop();
      } else {
        this.retryCount++;
        if (this.retryCount >= this.retry) {
          this.stop();
        }
      }
    }, this.gap);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.retryCount = 0;
  }
}
