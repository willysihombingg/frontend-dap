<template>
  <div class="">
    <!-- mt-8 -->
    <div class="p-4 bg-white rounded">
      <div class="bg-white white:bg-white">
        <div class="flex flex-row-reverse space-x-5 space-x-reverse ml-7 mr-5">
          <button
            @click="createModal = true"
            class="flex ml-auto text-black border-2 focus:ring-1 font-medium rounded-lg text-sm py-2 p-5 mr-2 mb-2 bg-white shadow-lg hover:bg-red-600 focus:outline-none focus:ring-white hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Create
          </button>
          <!-- Modal Create -->
          <div
            v-if="createModal"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center flex"
          >
            <div class="relative w-auto my-6 mx-auto max-w-6xl">
              <!-- Content -->
              <div
                class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                <!--header-->
                <div
                  class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                >
                  <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                      <div class="border-t border-gray-200" />
                    </div>
                  </div>

                  <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols">
                      <div class="mt-5 md:col-span-2 md:mt-0">
                        <form @submit.prevent="onUsersCreate">
                          <div class="overflow-hidden shadow sm:rounded-md">
                            <h1
                              class="flex justify-center font-semibold text-lg mt-10"
                            >
                              Create Data Master
                            </h1>
                            <div class="bg-white px-4 py-5 sm:p-10">
                              <div class="grid grid-cols-6 gap-12">
                                <div class="col-span-6 lg:col-span-6">
                                  <label
                                    for="first-name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Name</label
                                  >
                                  <input
                                    type="text"
                                    v-model="name"
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="given-name"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
                                  />
                                </div>
                                <div class="col-span-6 sm:col-span-6">
                                  <label
                                    for="email-address"
                                    class="block text-sm font-medium text-gray-700"
                                    >Email address</label
                                  >
                                  <input
                                    type="email"
                                    v-model="email"
                                    name="email-address"
                                    id="email-address"
                                    autocomplete="email"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                                  />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label
                                    for="nmpart"
                                    class="block text-sm font-medium text-gray-700"
                                    >Role</label
                                  >
                                  <select
                                    id="nmpart"
                                    v-model="role"
                                    name="nmpart"
                                    autocomplete="name-intern"
                                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                                  >
                                    <option value="" disabled selected>
                                      Select Role
                                    </option>
                                    <option>Admin</option>
                                    <option>Intern</option>
                                    <option>Buddy</option>
                                  </select>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label
                                    for="division"
                                    class="block text-sm text-start font-medium text-gray-700"
                                    >Division</label
                                  >
                                  <select
                                    id="division"
                                    v-model="division"
                                    name="division"
                                    autocomplete="name-division"
                                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                                  >
                                    <option value="" disabled selected>
                                      Select Division
                                    </option>
                                    <option>Backend</option>
                                    <option>FrontEnd</option>
                                    <option>Project Manager</option>
                                    <option>Software Quality Assurance</option>
                                    <option>Android</option>
                                    <option>IOS</option>
                                  </select>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label
                                    for="password"
                                    class="block text-sm font-medium text-gray-700"
                                    >Password</label
                                  >
                                  <input
                                    type="password"
                                    v-model="password"
                                    name="password"
                                    id="password"
                                    autocomplete="password"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="bg-white px-4 py-3 text-right sm:px-6">
                              <button
                                @click="createModal = false"
                                class="inline-flex mx-2 justify-center rounded-md border border-transparent bg-white py-2 px-4 text-sm font-medium text-dark shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 hover:text-white focus:ring-red-500 focus:ring-offset-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                class="inline-flex justify-center rounded-md border border-transparent bg-white py-2 px-4 text-sm font-medium text-dark shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 hover:text-white focus:ring-red-500 focus:ring-offset-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <label for="table-search" class="sr-only">Search</label>
          <input
            type="text"
            id="table-search"
            class="w-80 text-sm text-black bg-white-50 rounded-lg border border-black focus:red-700 focus:border-indigo-600 placeholder-red- 00 focus:ring-indigo-700"
            placeholder="Search for items"
          /> -->
        </div>
      </div>

      <div
        class="overflow-x-auto shadow-md sm:rounded-sm mt-5 mx-7 border-gray-300"
      >
        <table
          class="w-full text-sm text-center text-gray-500 white:text-gray-400"
        >
          <thead class="text-xs text-white uppercase text-center bg-red-privy">
            <tr>
              <th scope="col" class="py-3 px-1">No</th>
              <th scope="col" class="py-3 px-6">Name</th>
              <th scope="col" class="py-3 px-6">Email</th>
              <th scope="col" class="py-3 px-6">Part</th>
              <th scope="col" class="py-3 px-6">Division</th>
              <th scope="col" class="py-3 px-0">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b border-gray-200 white:hover:bg-white--600"
              v-for="(users, index) in usersList"
              :key="users.id"
            >
              <td class="p-4 w-1">{{ index + 1 }}</td>
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-700 whitespace-nowrap white:text-white"
              >
                {{ users.name }}
              </th>
              <td class="py-4 px-6 text-gray-700">{{ users.email }}</td>
              <td class="py-4 px-6 text-gray-700">{{ users.role }}</td>
              <td class="py-4 px-6 text-gray-700">
                {{ users.division == "" ? "-" : users.division }}
              </td>
              <td class="py-4 px-0">
                <Menu>
                  <div>
                    <MenuButton>
                      <EllipsisVerticalIcon class="h-5 w-5 text-gray-700" />
                    </MenuButton>
                    <MenuItems
                      class="absolute right-0 w-32 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 outline-none"
                    >
                      <div class="px-1 py-1">
                        <router-link v-slot="{ href, navigate }" to="" custom>
                          <button
                            class="group flex rounded-md items-center w-full px-2 py-2 text-sm"
                            @click="editModal = true"
                          >
                            <a
                              class="flex items-center"
                              :href="href"
                              @click="navigate"
                            >
                              Edit
                            </a>
                          </button>
                        </router-link>
                        <!-- Edit Modal -->
                        <div
                          v-if="editModal"
                          class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center flex"
                        >
                          <div class="relative w-auto my-6 mx-auto max-w-6xl">
                            <!-- Content -->
                            <div
                              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                            >
                              <!--header-->
                              <div
                                class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                              >
                                <div class="hidden sm:block" aria-hidden="true">
                                  <div class="py-5">
                                    <div class="border-t border-gray-200" />
                                  </div>
                                </div>

                                <div class="mt-10 sm:mt-0">
                                  <div class="md:grid md:grid-cols">
                                    <div class="mt-5 md:col-span-2 md:mt-0">
                                      <form>
                                        <div
                                          class="overflow-hidden shadow sm:rounded-md"
                                        >
                                          <h1
                                            class="flex justify-center font-semibold text-lg mt-10"
                                          >
                                            Edit Data Admin
                                          </h1>
                                          <div
                                            class="bg-white px-4 py-5 sm:p-10"
                                          >
                                            <div
                                              class="grid grid-cols-6 gap-12"
                                            >
                                              <div
                                                class="col-span-6 lg:col-span-6"
                                              >
                                                <label
                                                  for="name"
                                                  class="block text-sm text-start font-medium text-gray-700"
                                                  >Name</label
                                                >
                                                <input
                                                  type="text"
                                                  name="name"
                                                  id="name"
                                                  autocomplete="name"
                                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
                                                />
                                              </div>
                                              <div
                                                class="col-span-6 sm:col-span-6"
                                              >
                                                <label
                                                  for="email"
                                                  class="block text-sm text-start font-medium text-gray-700"
                                                  >Email address</label
                                                >
                                                <input
                                                  type="email"
                                                  name="email"
                                                  id="email"
                                                  autocomplete="email"
                                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                                                />
                                              </div>

                                              <div
                                                class="col-span-6 sm:col-span-3"
                                              >
                                                <label
                                                  for="nmpart"
                                                  class="block text-sm text-start font-medium text-gray-700"
                                                  >Part</label
                                                >
                                                <select
                                                  id="nmpart"
                                                  name="nmpart"
                                                  autocomplete="name-intern"
                                                  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                                                >
                                                  <option>Select Part</option>
                                                  <option>Admin</option>
                                                  <option>Student</option>
                                                  <option>Buddy</option>
                                                </select>
                                              </div>

                                              <div
                                                class="col-span-6 sm:col-span-3"
                                              >
                                                <label
                                                  for="division"
                                                  class="block text-sm text-start font-medium text-gray-700"
                                                  >Division</label
                                                >
                                                <select
                                                  id="division"
                                                  name="division"
                                                  autocomplete="name-division"
                                                  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                                                >
                                                  <option>
                                                    Select Division
                                                  </option>
                                                  <option>Backend</option>
                                                  <option>FrontEnd</option>
                                                  <option>
                                                    Project Manager
                                                  </option>
                                                  <option>
                                                    Software Quality Assurance
                                                  </option>
                                                  <option>Android</option>
                                                  <option>IOS</option>
                                                </select>
                                              </div>

                                              <div
                                                class="col-span-6 sm:col-span-3"
                                              >
                                                <label
                                                  for="password"
                                                  class="block text-sm text-start font-medium text-gray-700"
                                                  >Password</label
                                                >
                                                <input
                                                  type="password"
                                                  name="password"
                                                  id="password"
                                                  autocomplete="password"
                                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="bg-gray-50 px-4 py-3 text-right sm:px-6"
                                          >
                                            <button
                                              @click="editModal = false"
                                              class="inline-flex mx-2 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            >
                                              Close
                                            </button>
                                            <button
                                              type="submit"
                                              class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            >
                                              Save
                                            </button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          @click="usersDelete(users.id)"
                          class="group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </MenuItems>
                  </div>
                </Menu>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <nav
        class="flex justify-between items-center pt-4 mx-7"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-black"
          >Showing
          <span class="font-semibold text-black">1-10</span>
          of
          <span class="font-semibold text-black">1000</span></span
        >
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              class="block py-2.5 px-3 ml-0 leading-tight border text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="py-2 px-3 leading-tight border text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="z-10 py-2 px-3 leading-tight border text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="py-2 px-3 leading-tight border text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700-white"
              >...</a
            >
          </li>
          <li>
            <a
              href="#"
              class="py-2 px-3 leading-tight border text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >100</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2.5 px-3 leading-tight border text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav> -->
    </div>
  </div>
</template>

<script>
import {
  usersCreate,
  getAllUsers,
  deleteUsers,
  // updateUsers,
} from "../../../network/api-request";
import { EllipsisVerticalIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { useRoute } from "vue-router";
import {
  Menu,
  MenuButton,
  MenuItems,
  // MenuItem,
} from "@headlessui/vue";
// import { ref } from "vue";
// import { useRoute } from "vue-router";

export default {
  components: {
    EllipsisVerticalIcon,
    Menu,
    MenuButton,
    MenuItems,
  },
  setup() {
    const selectAll = ref(false);
    const route = useRoute();

    return {
      selectAll,
      route,
    };
  },
  data() {
    return {
      name: "",
      email: "",
      role: "",
      division: "",
      password: "",
      users: [],
      usersList: [],
      menu: false,
      items: [{ icon: EllipsisVerticalIcon }],
      createModal: false,
      editModal: false,
    };
  },
  computed: {
    // role() {
    //   return localStorage.getItem("user");
    // },
  },
  mounted() {
    console.log("cek role :", localStorage.getItem("user"));
    this.getUsers();
    this.id = this.$route.params.id;
  },
  methods: {
    async getUsers() {
      const allUsers = await getAllUsers();
      this.usersList = allUsers.data;
      console.log(this.usersList);
    },
    async onUsersCreate() {
      const result = await usersCreate(
        this.name,
        this.email,
        this.role,
        this.division,
        this.password
      );
      if (result.data) {
        // y        this.$nextTick(() => {
        //           location.reload();
        //         });
        this.$router.go(0);
      }
    },
    async usersDelete(id) {
      const result = await deleteUsers(id);
      if (result.message) {
        this.$router.go(0);
      }
    },
    // async usersUpdate() {
    //   const params = {
    //     id: this.id,
    //     name: this.name,
    //     email: this.email,
    //     role: this.role,
    //     password: this.password,
    //   };
    //   const result = await updateUsers(this.id, params);
    //   if (result.data) {
    //     this.$router.push("/users");
    //   } else if (result.message == "Network Error") {
    //     console.log("Wrong Data");
    //   }
    // },
  },
};
</script>

<style>
.bg-red-privy {
  background-color: #f8001a;
}
</style>
