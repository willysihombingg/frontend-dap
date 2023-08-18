<template>
  <aside class="bg-red-privy h-screen">
    <div class="bg-white shadow-none mb-5 border-r">
      <router-link to="#"
        ><img
          class="w-32 mx-auto py-3.5"
          src="/src/assets/images/privyactivity.png"
      /></router-link>
    </div>
    <!-- <div class="flex">
      <Bars3Icon
        class="fill-white h-7 flex relative mx-5 mb-9 cursor-pointer"
      />
      <Bars3BottomRightIcon
        class="fill-white h-7 flex ml-auto mx-5 relative mb-9 cursor-pointer"
        :class="isOpened ? open : ''"
      />
    </div> -->

    <div class="flex justify-center items-center">
      <select
        @change="allActivity($event)"
        id="intern"
        v-if="role == 'buddy' || role == 'admin'"
        name="intern"
        autocomplete="intern-name"
        class="rounded-md border w-64 border-gray-300 bg-white shadow-sm sm:text-sm"
      >
        <option value="" disabled selected>Select Student</option>
        <option
          v-for="student in students"
          :value="student.id"
          :key="student.id"
        >
          {{ student.name }}
        </option>
      </select>
    </div>
    <div>
      <DatePicker
        @dayclick="onDayClick"
        v-model="date"
        class="m-6 mt-6"
        :attributes="attrs"
        color="red"
      />
    </div>
  </aside>
</template>

<script>
import { getAllActivity, getAllUsers } from "@/network/api-request";
import "v-calendar/dist/style.css";
import { Bars3Icon, Bars3BottomRightIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    Bars3Icon,
  },
  data() {
    return {
      date: new Date(),
      attrs: [],
      role: "",
      students: [],
      selectedStudent: 0,
    };
  },
  computed: {
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },

  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.role = user.role;

    if (this.role == "student") {
      const now = new Date(
        this.date.getTime() + Math.abs(this.date.getTimezoneOffset() * 60000)
      );
      const date = now.toISOString().substring(0, 10);
      const index = this.attrs.findIndex(
        (data) => data.dates.substring(0, 10) == date
      );
      this.$emit("dateChanged", {
        date: date,
        isEmpty: index < 0,
        onClick: false,
      });

      this.allActivity();
    }

    if (this.role == "buddy") {
      this.getUsers();
    }
  },

  methods: {
    onDayClick(day) {
      const index = this.attrs.findIndex(
        (data) => data.dates.substring(0, 10) == day.id
      );

      let queries = {
        date: day.id,
        isEmpty: index < 0,
        onClick: true,
      };

      if (this.role == "buddy") {
        queries.selectedStudent = this.selectedStudent;
      }

      this.$emit("dateChanged", queries);
    },
    async allActivity(event) {
      if (this.role == "buddy") {
        this.selectedStudent = event.target.value;
      }
      const totalDate = new Date(
        this.date.getFullYear(),
        this.date.getMonth() + 1,
        0
      ).getDate();
      const user = JSON.parse(localStorage.getItem("user"));
      const beginDate = this.date.toISOString().substring(0, 10);
      const endDate = `${this.date.getFullYear().toString()}-${(
        this.date.getMonth() + 1
      ).toString()}-${totalDate}`;
      console.log("TOTAL DATE:", totalDate);
      console.log("BEGIN DATE:", beginDate);
      console.log("END DATE:", endDate);
      const allActivity = await getAllActivity(
        beginDate,
        endDate,
        this.role == "buddy" ? this.selectedStudent : user.user_id
      );
      this.attrs = allActivity.data;
    },
    async getUsers() {
      const allUsers = await getAllUsers();
      const result = allUsers.data.filter((user) => user.role == "student");
      this.students = result;
    },
  },
};
</script>
