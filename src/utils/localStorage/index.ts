export const getStorageItem = (key: string) => {
  if (typeof window === 'undefined') return
  const item = window.localStorage.getItem(key)
  return item
}

export const setStorageItem = (key: string, value: unknown) => {
  if (typeof window === 'undefined') return
  const item = window.localStorage.setItem(key, JSON.stringify(value))
  return item
}
