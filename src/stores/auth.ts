import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    isLoggedIn: false as boolean,
  }),
  actions: {
    clearToken() {
      this.token = null
      localStorage.removeItem('token')
    },
    doLogin(logAuth: string, token: string) {
      if (localStorage.getItem('auth')) {
        localStorage.removeItem('auth')
      } else {
        this.isLoggedIn = true
        localStorage.setItem('auth', logAuth)
        this.token = token
        localStorage.setItem('token', token)
      }
    },
    doLogout() {
      this.isLoggedIn = false
      localStorage.removeItem('auth')
      this.clearToken()
    },
    checkAuth() {
      if (localStorage.getItem('auth') && localStorage.getItem('token')) {
        return true
      } else {
        return false
      }
    },
  },
})
