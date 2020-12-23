import { dexApi } from '@soramitsu/soraneo-wallet-web'

import storage from './storage'

export const formatNumber = (value: string | number, decimalLendth?: number): string => {
  const valueNumber = +value
  return valueNumber.toFixed(decimalLendth || 4)
}

export const getTokenIconClasses = (symbol: string) => {
  const cssClass = 'token-logo'
  if (symbol) {
    return `${cssClass} ${cssClass}--${symbol.toLowerCase()}`
  }
  return cssClass
}

export const isWalletConnected = () => {
  const isExternal = Boolean(storage.get('isExternal'))
  const address = storage.get('address')
  return !!(
    isExternal
      ? address
      : address && storage.get('name') && storage.get('password')
  )
}

export const isApiConnected = () => dexApi?.api?.isConnected