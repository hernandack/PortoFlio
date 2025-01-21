<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const logEmail = ref<string>('')
const logPassword = ref<string>('')
const regName = ref<string>('')
const regEmail = ref<string>('')
const regPassword = ref<string>('')
const logError = ref<string>('')
const regError = ref<string>('')

const authStore = useAuthStore()
const router = useRouter()

const handleRegister = async () => {
  const registerUrl = 'http://localhost:5000/api/auth/register'
  try {
    const response = await axios.post(registerUrl, {
      name: regName.value,
      email: regEmail.value,
      password: regPassword.value,
    })
    console.log('registered success')
    authStore.doLogin(regEmail.value, response.data?.token)
    router.push('/dashboard')
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Registration failed:', error.response.data)
      regError.value = error.response.data.message || 'Registration failed'
    } else {
      console.error('Registration failed:', error)
      regError.value = 'An unexpected error occurred'
    }
  }
}

const handleLogin = async () => {
  const loginUrl = 'http://localhost:5000/api/auth/login'
  try {
    const response = await axios.post(loginUrl, {
      email: logEmail.value,
      password: logPassword.value,
    })
    authStore.doLogin(logEmail.value, response.data?.token)
    console.log('login success')
    router.push('/dashboard')
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Login failed:', error.response.data)
      logError.value = error.response.data.message || 'Login failed'
    } else {
      console.error('Login failed:', error)
      logError.value = 'An unexpected error occurred'
    }
  }
}
</script>

<template>
  <main class="login-page grid grid-cols-70/30">
    <figure class="login__illustration relative w-full">
      <img
        src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        class="block w-full h-full object-cover"
      />
    </figure>
    <div class="forms">
      <form class="login__form flex flex-col gap-4 py-10 px-20" @submit.prevent="handleLogin">
        <legend class="uppercase text-lg font-bold">LOGIN</legend>
        <p v-if="logError" class="text-sm text-red-500 -my-2">{{ logError }}</p>
        <fieldset class="flex flex-col gap-1">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-input"
            name="email"
            id="email"
            v-model="logEmail"
            required
          />
        </fieldset>
        <fieldset class="flex flex-col gap-1">
          <label for="email">Password</label>
          <input
            type="password"
            class="form-input"
            name="password"
            id="password"
            v-model="logPassword"
            required
          />
        </fieldset>
        <fieldset class="flex justify-end">
          <button type="submit" class="form-button py-2 px-4 bg-black text-light rounded-sm">
            Login
          </button>
        </fieldset>
      </form>

      <div class="spacer">OR</div>

      <form class="register__form flex flex-col gap-4 py-10 px-20" @submit.prevent="handleRegister">
        <legend class="uppercase text-lg font-bold">REGISTER</legend>
        <p v-if="regError" class="text-sm text-red-500 -my-2">{{ regError }}</p>
        <fieldset class="flex flex-col gap-1">
          <label for="regname">Name</label>
          <input
            type="text"
            class="form-input"
            name="regname"
            id="regname"
            v-model="regName"
            required
          />
        </fieldset>
        <fieldset class="flex flex-col gap-1">
          <label for="regemail">Email</label>
          <input
            type="email"
            class="form-input"
            name="regemail"
            id="regemail"
            v-model="regEmail"
            required
          />
        </fieldset>
        <fieldset class="flex flex-col gap-1">
          <label for="regpassword">Password</label>
          <input
            type="password"
            class="form-input"
            name="regpassword"
            id="regpassword"
            v-model="regPassword"
            required
          />
        </fieldset>
        <fieldset class="flex justify-end">
          <button type="submit" class="form-button py-2 px-4 bg-black text-light rounded-sm">
            Register
          </button>
        </fieldset>
      </form>
    </div>
  </main>
</template>

<style scoped>
.login-page,
.login__illustration {
  max-height: calc(100svh - 0px);
}
.spacer {
  display: flex;
  align-items: center;
  gap: 1em;
}
.spacer::before,
.spacer::after {
  content: '';
  width: 100%;
  height: 0.3em;
  background-color: rgb(163, 179, 202);
  display: inline-flex;
}
</style>
