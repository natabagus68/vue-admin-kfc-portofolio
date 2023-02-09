<template>
  <div class="flex flex-wrap mt-4 h-screen">
    <div class="w-full mb-12 px-4">
      <card-form-update :data="data" />
    </div>
  </div>
</template>

<script>
import CardFormUpdate from "@/components/Cards/CardFormUpdate.vue";
import axios from "axios";
export default {
  data() {
    return {
      data: null,
    };
  },
  components: {
    CardFormUpdate,
  },
};
</script>
