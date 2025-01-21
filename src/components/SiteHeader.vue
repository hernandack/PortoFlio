<script setup lang="ts">
import { watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const handleLogout = () => {
  authStore.doLogout()
}

watch(
  () => authStore.isLoggedIn,
  () => {
    if (!authStore.isLoggedIn) handleLogout()
  },
)
</script>

<template>
  <header class="site-header flex justify-between items-center gap-5 py-3 px-10 w-full text-sm">
    <RouterLink to="/"><span class="font-bold text-xl">Porto.</span></RouterLink>
    <nav class="site-header__menu">
      <template v-if="!authStore.isLoggedIn">
        <RouterLink
          to="login"
          class="py-2 px-4 bg-black text-white rounded-md flex items-center gap-2 font-bold"
        >
          <span class="pi pi-sign-in"></span> TRY NOW
        </RouterLink>
      </template>
      <template v-else>
        <a href="/" @click="handleLogout">Logout</a>
      </template>
    </nav>
  </header>
</template>
