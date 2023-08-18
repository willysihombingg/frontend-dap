import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const useLoginStore = defineStore({
  id: "LoginStore",
  state: () => ({
    email: "",
    password: "",
  }),
  getters: {},
  actions: {
    async userClickLoginButton() {
      try {
        let result = await axios.post(`http://18.136.195.232/api/v1/login`, {
          email: this.email,
          password: this.password,
        });
        result = result.data;
        if (result.data) {
          let userString = JSON.stringify({
            user_id: result.data.user_id,
            name: result.data.name,
            email: result.data.email,
            role: result.data.role,
            created_at: result.data.created_at,
          });
          localStorage.setItem("token", "Bearer " + result.data.token);
          localStorage.setItem("user", userString);
          if (result.data.role == "admin") {
            router.push("/users");
            this.$router.go(0);
          } else {
            router.push("/");
          }
          // console.log(result);
        }
      } catch (error) {
        return error;
      }
    },
  },
});
