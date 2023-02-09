<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar/Sidebar.vue";
import Navbar from "../components/Navbars/Navbar.vue";
import HeaderStats from "../components/Headers/HeaderStats.vue";
import FooterAdmin from "../components/Footers/FooterAdmin.vue";
import { useProductStore } from "../store/productStore";
import { useCategoryStore } from "../store/categoryStore";
export default {
  components: {
    Sidebar,
    Navbar,
    HeaderStats,
    FooterAdmin,
  },
  setup() {
    const useProduct = useProductStore();
    const useCategory = useCategoryStore();
    useProduct.getData();
    useCategory.getData();
  },
};
</script>
