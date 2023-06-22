
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  layout: 'dashboard',
})
</script>

<template>
  <div class="lg:px-8 px-4 mb-6">
    <slot />
  </div>
</template>
