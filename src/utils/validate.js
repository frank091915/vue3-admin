export function isExternal(path) {
  /**
   * param path 资源路径
   */
  return /^(https?:|mailto:|tel:)/.test(path)
}
