import { setItem, getItem } from './storage'
import store from '@/store'
import { TIME_STAMP } from '@/constant'

export function setLoginTimeStampe() {
  setItem(TIME_STAMP, Date.now())
}

export function isTokenValid() {
  const timeStapm = getItem(TIME_STAMP)
  const tokenValidTime = store.state.user.tokenValidTime
  return Date.now() - timeStapm < tokenValidTime
}
