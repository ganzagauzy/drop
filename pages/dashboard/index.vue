<script lang="ts" setup>
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
        <DashboardHome />
      </pageSection>
    </PageBody>
  </PageWrapper>
</template>
