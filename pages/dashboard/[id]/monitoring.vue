<script lang="ts" setup>
import { definePageMeta } from 'nuxt/dist/pages/runtime'
// function useRoute() {
//   throw new Error('Function not implemented.');
// }

definePageMeta({
  layout: 'app',
});
const {id} = useRoute().params
</script>

<template>
  <PageWrapper>
    <!-- <PageHeader>
      <PageTitle :text="$t('pages.dashboard-apps.index.title')" class="capitalize" />
    </PageHeader> -->
    
    <PageBody>
      <PageSection>
        hii
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>


