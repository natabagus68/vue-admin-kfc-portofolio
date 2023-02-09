import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore({
  id: "category",
  state() {
    return {
      data: [],
    };
  },
  actions: {
    async getData() {
      try {
        const response = await axios({
          method: "get",
          url: "https://server-kfc-deploy-production.up.railway.app/categories",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        const responseBody = response.data;
        const data = responseBody.data;

        this.data = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
