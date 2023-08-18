<template>
  <div v-if="role == 'buddy'" class="sm:container sm:mt-10">
    <div class="p-4 bg-white rounded-md border m-11 shadow">
      <div class="bg-white white:bg-white">
        <form action="">
          <div v-for="activity in activities" class="" :key="activity.id">
            <label for="" class="pr-10">Activity</label>
            <input
              type="text"
              v-model="activity.activity"
              class="md:w-96 sm:h-9 mr-12 sm:mb-3 rounded-md"
            />
            <label for="" class="mr-2">Time</label>
            <input
              type="number"
              class="mt-0 sm:h-9 rounded-md w-16 text-center"
              v-model="activity.time"
            />
          </div>
          <div class="md:mt-7 sm:mt-7 mt-5 flex justify-start items-start">
            <!-- Total Work Hours : {{ totalHours }} -->
          </div>
        </form>
      </div>
    </div>
    <div class="md:mt-5 flex justify-end mr-6">
      <button
        type="button"
        @click="verifyActivity()"
        class="btn mx-2 px-3 py-1 justify-center rounded-md border border-transparent shadow-md bg-white-600 text-sm font-medium text-black hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-500 hover:text-white focus:ring-offset-1 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-x-110 duration-500"
      >
        Verify
      </button>
    </div>
  </div>
  <div v-else class="sm:container sm:mt-10">
    <div class="p-4 bg-white rounded-md border m-11 shadow">
      <div class="bg-white white:bg-white">
        <form action="">
          <div
            v-for="(activity, index) in activities"
            class=""
            :key="activity.id"
          >
            <label for="" class="pr-10">Activity</label>
            <input
              type="text"
              v-model="activity.activity"
              class="md:w-96 sm:h-9 mr-12 sm:mb-3 mt-2 mb-3 rounded-md"
            />
            <label for="" class="mr-2">Time</label>
            <input
              type="number"
              class="mt-0 sm:h-9 rounded-md w-16 text-center"
              v-model="activity.time"
            />

            <button
              v-if="activity.id != null"
              @click="removeActivity(activity.id)"
              type="button"
              class="btn inline-flex mx-2 justify-center rounded-md border bg-none border-transparent py-1 px-2 text-sm font-medium text-red"
            >
              <TrashIcon
                class="w-6 m-0 fill-red-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </button>
            <button
              @click="saveActivity(index)"
              v-if="activity.id == null && activity.time != null"
              type="button"
              class="btn-submit mx-3 inline-flex justify-center rounded-md bg-none text-green-500 py-1 px-2 text-sm font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <DocumentCheckIcon class="w-6" />
            </button>
          </div>
          <div class="md:mt-7 sm:mt-7 mt-5 flex justify-start items-start">
            <!-- Total Work Hours : {{ totalHours }} -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { TrashIcon } from "@heroicons/vue/24/solid";
import { PlusIcon } from "@heroicons/vue/24/solid";
import { DocumentCheckIcon } from "@heroicons/vue/24/solid";
import {
  activityCreate,
  deleteActivity,
  getActivityDetails,
  verifyActivity,
} from "../../../network/api-request";

export default {
  data() {
    return {
      activities: [],
      verify: [],
      date: this.date,
      totalHours: 0,
      role: "",
      studentId: 0,
    };
  },
  watch: { $route: "getActivityDetails" },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));

    this.role = user.role;
    this.date = this.$route.query.date;

    if (this.role != "buddy") {
      this.getActivityDetails();
    }
  },
  methods: {
    async getActivityDetails() {
      let selectedStudentId = 0;
      if (this.role == "buddy") {
        selectedStudentId = this.$route.query.userId;
      } else if (this.role == "student") {
        selectedStudentId = JSON.parse(localStorage.getItem("user")).user_id;
      }
      const activities = await getActivityDetails(
        this.$route.query.date,
        selectedStudentId
      );
      // console.log(selectedStudentId);
      // console.log("HERE: ", activities);
      this.activities = activities.data;

      if (this.role == "student") {
        this.addMoreActivity();
      }
    },

    async saveActivity(index) {
      const activity = this.activities[index].activity;
      const time = this.activities[index].time;
      // console.log("INI ACTIVITY :", activity);
      // console.log("INI TIME :", time);
      const result = await activityCreate(
        activity,
        time,
        this.$route.query.date
      );
      if (result.data) {
        this.getActivityDetails(); // RE- RENDER COMPONENT
        // console.log("INDEX: ", index);
      }
      // console.log("DATA: ", this.activities[index]);
      // HIT API CREATE ACTIVITY
    },

    async removeActivity(id) {
      const result = await deleteActivity(id);
      if (result.message) {
        this.getActivityDetails();
      }
      // console.log("ID: ", id);
    },

    async verifyActivity() {
      const date = this.$route.query.date;
      const user_id = parseInt(this.$route.query.userId);
      console.log("INI ADALAH DATE :", date);
      console.log("INI ADALAH USERID :", user_id);

      const result = await verifyActivity(date, user_id);
      console.log(result);
    },

    addMoreActivity() {
      this.activities.push({ activity: "", time: null });
    },
  },
  components: {
    TrashIcon,
    PlusIcon,
    DocumentCheckIcon,
  },
};
</script>
