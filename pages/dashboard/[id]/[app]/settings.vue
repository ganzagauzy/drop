<script lang="ts" setup>

definePageMeta({
  layout: 'app',
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
        <alert-3 
        type="danger"
        :title="`Delete your app`"
          :text="`Once you delete your app, you will lose all data associated with it.`"
          class="mb-4 text-green"
         />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
<style lang="scss" scoped>

</style>
