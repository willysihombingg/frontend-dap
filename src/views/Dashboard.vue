<template>
  <div class="flex drop-shadow h-screen" id="app">
    <Sidebar
      v-if="role != 'admin'"
      @calender="inimethods"
      @dateChanged="dateChanged"
    />

    <div class="flex flex-col flex-grow bg-white">
      <Header />

      <div class="mb-auto h-screen">
        <router-view />
      </div>

      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import Sidebar from "@/views/layouts/Sidebar.vue";
import Header from "@/views/layouts/Header.vue";
// import Footer from "@/components/layouts/Footer.vue";

export default {
  components: {
    Sidebar,
    Header,
    // Footer,
  },

  data() {
    return {
      role: "",
    };
  },

  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.role = user.role;
  },
  methods: {
    inimethods(value) {
      this.date = value;
    },
    dateChanged(value) {
      let query = {
        date: value.date,
        isEmpty: value.isEmpty,
        userId: value.selectedStudent,
      };

      this.$router.push({
        query,
      });
    },
  },
};
</script>
