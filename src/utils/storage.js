/**
 * 存数据
 * 取数据
 * 删除数据
 */

export function setItem(key, val) {
  /**
   * 基本类型数据
   * 引用数据类型
   */
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  localStorage.setItem(key, val)
}

export function getItem(key) {
  /**
   * 获取基本数据类型字符串
   * 获取转换后的引用类型
   */
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

export function removeItem(key) {
  localStorage.removeItem(key)
}

export function removeAllData(key) {
  localStorage.clear()
}
