<script lang="ts" setup>
definePageMeta({
  layout: 'app',
});

</script>

<template>
  <PageWrapper>
    <!-- <PageHeader>
      <PageTitle :text="$t('pages.dashboard-apps.index.title')" class="capitalize" />
    </PageHeader> -->
    
    <PageBody>
      <PageSection>
        <AppSingleapp />
      </PageSection>
      <pageSection>
        <!-- <DashboardHome /> -->
      </pageSection>
    </PageBody>
  </PageWrapper>
</template>
