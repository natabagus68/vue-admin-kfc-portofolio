<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h5 class="text-blueGray-400 uppercase font-bold text-xs">
            {{ statSubtitle }}
          </h5>
          <span class="font-semibold text-xl text-blueGray-700">
            {{ statTitle }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-stats",
  props: {
    statSubtitle: {
      type: String,
      default: "",
    },
    statTitle: {
      type: String,
      default: "0",
    },
  },
};
</script>
