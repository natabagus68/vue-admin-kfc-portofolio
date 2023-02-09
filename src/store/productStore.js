import { defineStore } from "pinia";
import axios from "axios";
export const useProductStore = defineStore({
  id: "product",
  state() {
    return {
      data: [],
      loading: false,
    };
  },

  actions: {
    getData: async function () {
      try {
        this.loading = true;
        const response = await axios({
          method: "get",
          url: "https://server-kfc-deploy-production.up.railway.app/products",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const responseBody = response.data;
        const data = responseBody.data;
        this.data = data;
        this.loading = false;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
