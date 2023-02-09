<template>
  <div>
    <a
      class="text-slate-500 py-1 px-3"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <i class="fas fa-ellipsis-v"></i>
    </a>
    <div
      ref="popoverDropdownRef"
      class="block bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <router-link
        v-if="status !== 'archive'"
        :to="`/admin/update/${id}`"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Update Product
      </router-link>
      <a
        @click.prevent="onUpdateStatus(id)"
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Update Status
      </a>
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        delete
      </a>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
import Swal from "sweetalert2";
import axios from "axios";
import { mapActions } from "pinia";
import { useProductStore } from "../../store/productStore";
export default {
  data() {
    return {
      dropdownPopoverShow: false,
      id: this.id,
    };
  },
  computed: {
    ...mapActions(useProductStore, ["getData"]),
  },
  props: ["id", "status"],
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
    onUpdateStatus: function (id) {
      Swal.fire({
        title: "select option status",
        input: "select",
        inputOptions: {
          active: "active",
          inactive: "inactive",
          archive: "archive",
        },
        showCancelButton: true,
        confirmButtonText: "update",
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),
      }).then(async (result) => {
        console.log(result.value);
        await axios({
          method: "patch",
          url:
            "https://server-kfc-deploy-production.up.railway.app/products/" +
            id,
          data: {
            status: result.value,
          },
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.getData();
      });
    },
  },
};
</script>
