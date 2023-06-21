<script lang="ts" setup>

definePageMeta({
  layout: 'app',
});
const {id} = useRoute().params
</script>
<script lang="ts">
export default {
  data() {
    return {
      message:"hii there"
    }
  },
  computed: {
    idP() {
      return this.$route.name
    }
  },
}
</script>

<template>
  <PageWrapper>
    <!-- <PageHeader>
      <PageTitle :text="$t('pages.dashboard-apps.index.title')" class="capitalize" />
    </PageHeader> -->
    
    <PageBody>
      <PageSection>
        <AppActivity />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
