<template>
  <div>
    <img v-bind:src="source" />
  </div>
</template>
<script>
export default {
  name: "Brand",
  props: ["source"]
};
</script>