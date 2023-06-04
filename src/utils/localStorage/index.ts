export const getStorageItem = (key: string) => {
  const item = localStorage.getItem(key)
  return item
}

export const setStorageItem = (key: string, value: unknown) => {
  const item = localStorage.setItem(key, JSON.stringify(value))
  return item
}
