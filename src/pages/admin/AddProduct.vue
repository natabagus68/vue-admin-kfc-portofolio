<template>
  <div class="flex flex-wrap mt-4 h-screen">
    <div class="w-full mb-12 px-4">
      <card-form />
    </div>
  </div>
</template>

<script>
import CardForm from "@/components/Cards/CardForm.vue";
export default {
  components: {
    CardForm,
  },
};
</script>
