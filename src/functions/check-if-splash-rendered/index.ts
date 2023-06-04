import { getStorageItem } from '@/utils/localStorage'

export const checkIfSplashRendered = () => {
  const isSplashRendered = getStorageItem('splashRendered')
  return !!isSplashRendered
}
