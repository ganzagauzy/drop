<script lang="ts" setup>
import { capitalize } from '../utils/str'
import { useLang } from '../composables/useLang'


// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.404.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.setting.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper class="flex flex-col items-center justify-center">
    <Error :code="404" />
  </PageWrapper>
</template>
