export function isTag(tag) {
  const list = ['/login', '/404', '/401']
  return !list.includes(tag.path)
}
