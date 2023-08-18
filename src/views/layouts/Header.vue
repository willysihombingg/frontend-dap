<template>
  <header
    class="flex border-b-2 px-6 flex-row-reverse space-x-4 space-x-reverse"
  >
    <div class="py-5 items-center ml-auto mx-6">
      <p class="text-gray-700">
        Hello, <span class="font-bold text-black"> {{ role.name }}</span>
      </p>
      <span class="flex justify-end text-xs italic">{{ role.role }}</span>
    </div>
    <div class="flex items-center">
      <ul class="flex flex-col text-black">
        <li class="mx-6 cursor-pointer">
          <a class="mt-3 text-base flex items-center" @click="onLogOut">
            <ArrowLeftOnRectangleIcon class="h-7" />
            <!-- :href="href" -->
            <span class="mx-2">Log Out</span>
          </a>
        </li>
      </ul>
    </div>
    <router-link to="/"
      ><img
        v-if="role.role != 'student' && role.role != 'buddy'"
        class="w-20 mx-5 py-5 mt-4"
        src="/src/assets/images/privyactivity.png"
    /></router-link>
  </header>
</template>
<script>
import { ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    ArrowLeftOnRectangleIcon,
  },
  data() {
    return {
      role: "",
    };
  },
  computed: {
    role() {
      const user = JSON.parse(localStorage.getItem("user"));
      return user;
    },
  },

  mounted() {},
  methods: {
    onLogOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.bg-red-privy {
  background-color: #f8011b;
}
</style>
