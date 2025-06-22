/**
 * 链式 Promise。一个一个地轮流处理
 * @example 弹窗队列，尤其是分布在各个生命周期里，但仍需要用户一个一个地轮流点击的
 * @example 扫码录入商品，同时在修改商品信息时，事件相互都要需要排队等待
 */
export class PromiseQueue {
  private queue: Promise<any> = Promise.resolve() // 任务 promise 链
  constructor(fnList: ((...params: any) => any)[]) {
    fnList.forEach((fn) => this.push(fn))
  }
  /**
   * 添加一个任务到队列
   * @param fn 任务函数，返回一个 Promise
   */
  push(fn: (...params: any) => any) {
    this.queue = this.queue.then(fn)
      .finally(() => this.reset())
  }
  // 有时候需要重置，比如在需要中断任务、请求失败后重试、跳转到了别的页面
  reset() {
    this.queue = Promise.resolve()
  }
}
