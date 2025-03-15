export class IntervalPoller {
  private intervalId: number | undefined
  private readonly interval: number

  constructor(interval: number) {
    this.interval = interval
  }

  start(callback: () => void) {
    this.stop()
    this.intervalId = window.setInterval(callback, this.interval)
  }

  stop() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId)
      this.intervalId = undefined
    }
  }
}
