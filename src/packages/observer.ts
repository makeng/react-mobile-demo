type Cb<T> = (key: keyof T, newValue: T[keyof T], oldValue: T[keyof T]) => void;

/**
 * 创建一个可监听属性变化的对象
 * @param target 目标对象
 * @returns 返回一个代理对象和一个事件注册方法
 */
export function createObservable<T extends object>(target: T) {
  const cbList: Cb<T>[] = []
  const origin = structuredClone(target)

  const proxy = new Proxy(target, {
    set(obj, key: keyof T, newValue) {
      const oldValue = obj[key]
      obj[key] = newValue as T[keyof T] // 需要断言为 T[keyof T]

      // 触发监听器
      cbList.forEach(cb => cb(key, newValue, oldValue))
      return true // 表示设置成功
    },
  })

  /**
   * 注册属性变化监听器
   * @param cb 监听回调函数
   */
  function onPropertyChange(cb: Cb<T>) {
    cbList.push(cb)
  }
  function clear() {
    Object.assign(proxy, origin)
    cbList.length = 0
  }

  return { proxy, onPropertyChange, clear }
}
