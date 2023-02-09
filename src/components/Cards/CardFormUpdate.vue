<template>
  <form @submit.prevent="onSubmitForm">
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6 mb-4">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold">
            Update Product KFC
          </h6>
          <button
            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Update Product
          </button>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Name
              </label>
              <input
                v-model="name"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="KFC Ayam Goreng"
                required
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Price
              </label>
              <input
                v-model="price"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Rp.20.000 IDR"
                required
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <div class="flex flex-wrap mt-6">
          <div class="w-full">
            <div class="flex items-center justify-center w-60">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <img v-if="imageUrl" :src="imageUrl" class="w-full h-full" />
                <div
                  v-if="!imageUrl"
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  @change="onSelectedImage"
                  class="hidden"
                  novalidate
                />
              </label>
            </div>
          </div>

          <div class="w-full lg:w-4/12 px-4 mt-3">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Stock
              </label>
              <input
                v-model="stock"
                type="number"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                required
                min="0"
              />
            </div>
          </div>

          <div class="w-full lg:w-4/12 px-4 mt-3">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Category
              </label>
              <select
                v-model="categoryId"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option selected>Choose Category</option>
                <option
                  v-for="(item, key) in useCategory.data"
                  :key="key"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Description
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Description
              </label>
              <textarea
                v-model="description"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                rows="4"
                required
              >
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { useCategoryStore } from "../../store/categoryStore";
import { useProductStore } from "../../store/productStore";
import { mapActions } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  setup() {
    const useCategory = useCategoryStore();
    return { useCategory };
  },

  data() {
    return {
      name: "",
      price: 0,
      image: null,
      stock: 0,
      categoryId: "Choose Category",
      description: "",
      imageUrl: "",
      fileBool: false,
    };
  },
  computed: {
    ...mapActions(useProductStore, ["getData"]),
  },
  methods: {
    onSelectedImage: function (event) {
      // console.log(event);
      const file = event.target.files[0];
      const imageName = URL.createObjectURL(file);
      this.imageUrl = imageName;
      this.image = file;
      this.fileBool = true;
    },

    getDataById: async function () {
      const { id } = this.$route.params;
      const response = await axios({
        method: "get",
        url:
          "https://server-kfc-deploy-production.up.railway.app/products/" + id,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      const responseBody = response.data;
      const data = responseBody.data;
      console.log(data);
      this.name = data.name;
      this.price = data.price;
      this.categoryId = data.CategoryId;
      this.image = data.imgUrl;
      this.imageUrl = data.imgUrl;
      this.stock = data.stock;
      this.description = data.description;
    },

    onSubmitForm: async function () {
      try {
        const { id } = this.$route.params;
        const formBody = new FormData();
        formBody.append("name", this.name);
        formBody.append("price", this.price);
        formBody.append("CategoryId", this.categoryId);
        formBody.append("description", this.description);
        formBody.append("stock", this.stock);
        if (this.fileBool) {
          formBody.append("image", this.image);
        } else {
          formBody.append("imgUrl", this.image);
        }

        const response = await axios({
          method: "put",
          url:
            "https://server-kfc-deploy-production.up.railway.app/products/" +
            id,
          data: formBody,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.$router.push({ path: "/admin/tables" });
        this.getData();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Update has saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getDataById();
  },
  props: ["data"],
};
</script>
