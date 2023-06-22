<script lang="ts" setup>
import { definePageMeta } from 'nuxt/dist/pages/runtime'
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper class="flex flex-col">
    <PageContentDoc empty-tip="Post im empty" />
  </PageWrapper>
</template>
