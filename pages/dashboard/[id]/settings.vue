<script lang="ts" setup>

definePageMeta({
  layout: 'dashboard',
});
const {id} = useRoute().params
</script>
<script>

</script>

<template>
  <PageWrapper>
    <!-- <PageHeader>
      <PageTitle :text="$t('pages.dashboard-apps.index.title')" class="capitalize" />
    </PageHeader> -->
    
    <PageBody>
      <PageSection class="alert">
        <alert-4
        type="danger"
        :title="`Delete Organisation`"
          :text="`You may delete your organization. This cannot be undone.`"
          class="mb-4 text-green"
         />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
<style lang="scss" scoped>

</style>
