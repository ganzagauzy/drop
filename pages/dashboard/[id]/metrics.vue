<script lang="ts" setup>
import { definePageMeta } from 'nuxt/dist/pages/runtime'

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
