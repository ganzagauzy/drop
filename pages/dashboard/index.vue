<script lang="ts" setup>
import { definePageMeta } from 'nuxt/dist/pages/runtime'
definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <PageWrapper>
    
    <PageBody>
      <PageSection>
        <DashboardApps />
      </PageSection>
      <pageSection>
      </pageSection>
    </PageBody>
  </PageWrapper>
</template>
