<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-4">
    <div class="max-w-md w-full">
      <h2 class="text-center text-2xl font-bold uppercase text-gray-800 mb-3">
        Sign In
      </h2>
      <h2
        class="text-center text-sm font-medium text-gray-800 mb-12 tracking-widest"
      >
        Please input your email & password is correctly
      </h2>
      <form class="space-y-4" @submit.prevent="onLogin">
        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <input
            id="email"
            v-model="LoginStore.email"
            name="email"
            type="email"
            autocomplete="email"
            class="w-full py-4 text-sm text-gray-900 rounded-md pl-10 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            placeholder="Email"
            required
          />
        </div>

        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>
          <input
            id="password"
            v-model="LoginStore.password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="w-full py-4 text-sm text-gray-900 rounded-md pl-10 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            placeholder="Password"
          />
        </div>

        <div>
          <button
            id="button"
            type="submit"
            @click="LoginStore.userClickLoginButton"
            class="group btn relative w-full uppercase flex justify-center py-4 px-6 shadow bg-red-privy hover:shadow-[white] text-white ease-in hover:translate-y-3 transition-all rounded-md"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from "../store/LoginStore";

export default {
  setup() {
    const LoginStore = useLoginStore();
    return {
      LoginStore,
    };
  },
};
</script>
